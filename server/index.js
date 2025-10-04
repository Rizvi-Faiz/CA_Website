const express = require('express');
const cors = require('cors');
const newsApi = require('../api/news'); // Import the news API module

const app = express();
const PORT = process.env.PORT || 5000; // Use port 5000 for the backend server

app.use(cors());
app.use(express.json());

// Mount the news API under the /api/news path
app.use('/api/news', newsApi);

app.get('/', (req, res) => {
  res.send('Backend server is running.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
