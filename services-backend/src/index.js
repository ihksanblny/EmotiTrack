require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const config = require('./config');

app.use(cors());
app.use(express.json());

const PORT = config.port;

app.get('/', (req, res)=> {
    res.status(200).json({ message: 'EmotiTrack Backend is running' });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

console.log(`CLIENT ID berhasil dimuat: ${config.clientId ? 'YA' : 'TIDAK'}`);