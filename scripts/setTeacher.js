const { db, auth } = require('./initFirebase');

(async function () {
  const user = await auth.getUserByEmail(process.env.EMAIL);
  if (!user) {
    console.log('No user found');
    process.exit(0);
  }

  await db.doc(`hasura/${user.uid}`).set(
    {
      claims: {
        'x-hasura-allowed-roles': ['teacher'],
        'x-hasura-default-role': 'teacher',
      },
    },
    { merge: true },
  );
  console.log('Done.');
  process.exit(0);
})();
