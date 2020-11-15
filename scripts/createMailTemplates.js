const { db } = require('./initFirebase');

const map = {
  link: {
    subject: 'Create your account on Courso !',
    html: `Hi {{full_name}}, a account has been pre created on the course manager app.<br />
This app is made by Nicolas Beaussart (@beaussan), if you have any question, please contact him.<br />
You can finish creating your account at this link : {{claimLink}}.
In this platform you will be able to see feedback and send practices.`,
  },
};
(async function () {
  await Promise.all(
    Object.entries(map).map(([name, body]) =>
      db.doc(`mailTemplate/${name}`).set(body),
    ),
  );
  console.log('Done.');
  process.exit(0);
})();
