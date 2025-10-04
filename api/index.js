const express = require('express');
const cors = require('cors');
const newsApi = require('./news');

const app = express();

app.use(cors());
app.use(express.json());

// Vercel forwards requests like /api/news to this file, with the path /news.
// We mount the newsApi router here to handle it.
app.use('/news', newsApi);

module.exports = app;
