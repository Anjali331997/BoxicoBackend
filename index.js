const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT||8080;
app.use(cors());

app.get('/sample-data', async (req, res) => {
  try {
    const response = await axios.get(process.env.API_URL);t
    console.log(response);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message:"Error while fetching data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
