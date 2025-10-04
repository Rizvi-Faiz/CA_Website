const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    const serviceAccount = JSON.parse(
      Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY, 'base64').toString('utf8')
    );
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
  } else {
    console.error('FIREBASE_SERVICE_ACCOUNT_KEY environment variable not found. API will not function correctly.');
  }
}

const db = admin.firestore();
const newsCollection = db.collection('news');

const app = express();
app.use(cors());
app.use(express.json());

// GET all news
app.get('/api/news', async (req, res) => {
  try {
    const snapshot = await newsCollection.orderBy('date', 'desc').get();
    const news = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).send('Error fetching news');
  }
});

// POST a new news item
app.post('/api/news', async (req, res) => {
  try {
    const newNewsItem = {
      title: req.body.title,
      date: req.body.date,
      content: req.body.content,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    };
    const docRef = await newsCollection.add(newNewsItem);
    res.status(201).json({ id: docRef.id, ...newNewsItem });
  } catch (error) {
    console.error('Error adding news item:', error);
    res.status(500).send('Error adding news item');
  }
});

// PUT (update) a news item
app.put('/api/news/:id', async (req, res) => {
  try {
    const newsId = req.params.id;
    const updatedData = {
      title: req.body.title,
      date: req.body.date,
      content: req.body.content,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    };
    await newsCollection.doc(newsId).update(updatedData);
    res.json({ id: newsId, ...updatedData });
  } catch (error) {
    console.error('Error updating news item:', error);
    res.status(500).send('Error updating news item');
  }
});

// DELETE a news item
app.delete('/api/news/:id', async (req, res) => {
  try {
    const newsId = req.params.id;
    await newsCollection.doc(newsId).delete();
    res.status(204).send(); // No content
  } catch (error) {
    console.error('Error deleting news item:', error);
    res.status(500).send('Error deleting news item');
  }
});

// Export the Express app as a Vercel Serverless Function
module.exports = app;
