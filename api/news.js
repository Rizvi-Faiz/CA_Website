const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    console.log('FIREBASE_SERVICE_ACCOUNT_KEY environment variable found.');
    const serviceAccount = JSON.parse(
      Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY, 'base64').toString('utf8')
    );
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } else {
    console.error('FIREBASE_SERVICE_ACCOUNT_KEY environment variable not found.');
  }
}

const db = admin.firestore();
const newsCollection = db.collection('news');

module.exports = async (req, res) => {
  try {
    const snapshot = await newsCollection.orderBy('date', 'desc').get();
    const news = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).send('Error fetching news');
  }
};
