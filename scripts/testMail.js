const { db } = require('./initFirebase');

(async function () {
  await db.collection('mail').add({
    to: ['nico.nouvelle.adresse@gmail.com'],
    template: {
      name: 'link',
      data: {
        full_name: 'Nicolas Beaussart',
        claimLink: 'https://time.is/',
      },
    },
  });
  console.log('Done.');
  process.exit(0);
})();
