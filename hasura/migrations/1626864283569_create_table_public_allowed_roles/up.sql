CREATE TABLE "public"."allowed_roles"("user_id" uuid NOT NULL, "role" text NOT NULL, PRIMARY KEY ("user_id","role") , FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE cascade, FOREIGN KEY ("role") REFERENCES "public"."roles"("value") ON UPDATE restrict ON DELETE cascade);