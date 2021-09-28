#!/usr/bin/env sh
set -o pipefail
#set -x


dedupFile() {
  echo "Env file $1"
  echo "--------"
  sort "$1" | uniq | tee "$1"
  echo "--------"
}

HASURA_ENV_FILE="./hasura/.env"
NEXT_ENV_FILE=".env.local"

HASURA_PORT=${HASURA_PORT:-8080}
HASURA_URL="http://localhost:$HASURA_PORT"


[ ! -f private.pem ] && openssl genrsa -out private.pem 2048
[ ! -f public.pem ] && openssl rsa -in private.pem -pubout -out public.pem

getOrGenerate() {
  TMP_SECRET=$(grep "$1" $HASURA_ENV_FILE | cut -d '=' -f 2- | head -n 1)
  if [ -n "$TMP_SECRET" ]; then
    echo "$TMP_SECRET"
  else
    openssl rand -hex 32
  fi
}

HASURA_GRAPHQL_ADMIN_SECRET=$(getOrGenerate "HASURA_GRAPHQL_ADMIN_SECRET")
HASURA_WEBHOOK_MASTER_TOKEN=$(getOrGenerate "HASURA_WEBHOOK_MASTER_TOKEN")
HASURA_ACTION_MASTER_TOKEN=$(getOrGenerate "HASURA_ACTION_MASTER_TOKEN")


PUBLIC=$(awk -v ORS='\\n' '1' public.pem)
PRIVATE=$(awk -v ORS='\\n' '1' private.pem)


{
  echo "HASURA_GRAPHQL_ADMIN_SECRET=$HASURA_GRAPHQL_ADMIN_SECRET"
  echo "HASURA_WEBHOOK_MASTER_TOKEN=$HASURA_WEBHOOK_MASTER_TOKEN"
  echo "HASURA_ACTION_MASTER_TOKEN=$HASURA_ACTION_MASTER_TOKEN"
  echo "JWT_PUBLIC_KEY=\"$PUBLIC\""
  # Use the localhost ip instead of localhost due to an issue with go resolution
  echo "HASURA_GRAPHQL_ENDPOINT=\"http://127.0.0.1:$HASURA_PORT\""
  echo "HASURA_WEBHOOK_MASTER_URL=\"http://localhost:3000/api/hasura/webhook\""
  echo "HASURA_ACTION_MASTER_URL=\"http://localhost:3000/api/hasura/action\""
} >> $HASURA_ENV_FILE

echo "Set env for hasura"
dedupFile $HASURA_ENV_FILE

{
  echo "NEXT_AUTH_JWT_SECRET_PRIVATE=\"$PRIVATE\""
  echo "NEXTAUTH_URL=\"http://localhost:3000\""
  echo "HASURA_ADMIN=$HASURA_GRAPHQL_ADMIN_SECRET"
  echo "HASURA_URL=$HASURA_URL"
  echo "NEXT_PUBLIC_HASURA_URL=$HASURA_URL"
  echo "HASURA_WEBHOOK_MASTER_TOKEN=$HASURA_WEBHOOK_MASTER_TOKEN"
  echo "HASURA_ACTION_MASTER_TOKEN=$HASURA_ACTION_MASTER_TOKEN"
  echo "NEXT_PUBLIC_HASURA_IS_HTTPS=no"
  echo "NEXT_AUTH_IS_SELF_LOGIN_ALLOWED=yes"
} >> $NEXT_ENV_FILE


echo "Set env for nextjs"
dedupFile $NEXT_ENV_FILE

echo "Start hasura and db"

cd hasura && docker-compose up -d

echo "Wait for hasura to be up"
until $(curl --output /dev/null --silent --fail $HASURA_URL/v1/version); do
    printf '.'
    sleep 1
done
printf '\n'

echo "Install deps"
yarn install

echo "Apply migrations"

yarn hasura migrate apply --skip-update-check --project hasura

echo "Apply metadata"
yarn hasura metadata apply --skip-update-check --project hasura

