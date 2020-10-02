const admin = require('firebase-admin');
const FieldValue = require('firebase-admin').firestore.FieldValue;
const fs = require('fs').promises;

let serviceAccount = require(`./${process.env.TARGET || 'dev'}`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const auth = admin.auth();

const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

const getCollection = async (collectionPath) => {
  let data = {};
  try {
    const snapshots = await db.collection(collectionPath).get();
    snapshots.forEach((doc) => {
      data[doc.id] = doc.data();
    });
  } catch (error) {
    console.error(`Could not get collection ${collectionPath}`, error);
  }
  return data;
};

const getDoc = async (collectionPath, docId) => {
  let data = {};
  try {
    const doc = await db.collection(collectionPath).doc(docId).get();

    data[doc.id] = doc.data();
  } catch (error) {
    console.error(`Could not get collection ${collectionPath}`, error);
  }
  return data;
};

const insertDocs = (collectionPath, docs) => {
  return asyncForEach(Object.entries(docs), async ([docId, docData]) => {
    await insertDoc(collectionPath, docData);
  });
};

const insertDoc = async (collectionPath, docData) => {
  try {
    return await db.collection(collectionPath).doc().set(docData);
  } catch (error) {
    console.error(
      `Could not insert in ${collectionPath} document ${docId}`,
      error,
    );
  }
};

const deleteCollection = async (collectionPath, batchSize) => {
  let collectionRef = db.collection(collectionPath);
  let query = collectionRef.orderBy('__name__').limit(batchSize);
  await deleteQueryBatch(collectionPath, query, batchSize);
};

const deleteQueryBatch = async (collectionPath, query, batchSize) => {
  let snapshot = null;

  try {
    snapshot = await query.get(query, batchSize);
  } catch (error) {
    console.error(
      `Could not find collection ${collectionPath} documents`,
      error,
    );
  }

  if (snapshot.size == 0) {
    return 0;
  }

  let batch = db.batch();
  snapshot.docs.forEach((doc) => {
    batch.delete(doc.ref);
  });

  let numTreated = 0;
  try {
    await batch.commit();
    numTreated = snapshot().size;
  } catch (error) {
    console.error(`Could not batch delete ${collectionPath}`);
  }

  if (numTreated === 0) {
    return;
  } else {
    process.nextTick(() => {
      deleteQueryBatch(collectionPath, query, batchSize);
    });
  }
};

const deleteDoc = async (collectionPath, docId) => {
  try {
    return await db.collection(collectionPath).doc(docId).delete();
  } catch (error) {
    console.error(
      `Could not delete in ${collectionPath} document ${docId}`,
      error,
    );
  }
};

const deleteField = async (collectionPath, docId, field) => {
  const newDocData = {};
  newDocData[field] = FieldValue.delete();

  try {
    const docRef = await db.collection(collectionPath).doc(docId);
    return await docRef.update(newDocData);
  } catch (error) {
    console.error(
      `Could not delete field ${field} in ${collectionPath} document ${docId}`,
      error,
    );
  }
};

const backupDoc = async (collectionPath, docId, filePath) => {
  const doc = await getDoc(collectionPath, docId);
  await writeToFile(doc, filePath);
};

const backupCollection = async (collectionPath, filePath) => {
  const docs = await getCollection(collectionPath);
  await writeToFile(docs, filePath);
};

const writeToFile = async (data, filePath) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, '\t'));
  } catch (error) {
    console.error(`Could not write data to file ${filePath}`, error);
  }
};

const promoteByEmail = async (email) => {
  try {
    const user = await auth.getUserByEmail(email);
    if (!user) {
      console.log('User not found');
      throw new Error('User not found');
    }
    await auth.setCustomUserClaims(user.uid, { admin: true });
    console.log('Promote sucessfull');
  } catch (error) {
    console.error(`Failed to promote user ${email}`);
  }
};

module.exports = {
  db,
  auth,
  admin,
  promoteByEmail,
  insertDocs,
  insertDoc,
  deleteCollection,
  deleteField,
  deleteDoc,
  backupDoc,
  backupCollection,
  asyncForEach,
};
