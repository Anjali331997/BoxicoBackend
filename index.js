const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/boxigo/sample-data', async (req, res) => {
  try {
    const response = await axios.get(process.env.API_URL);
    console.log(response);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error while fetching data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});