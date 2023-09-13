const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const API_URL = 'URL_DE_TU_API_AQUI'; // Reemplaza esto con la URL de tu API

app.get('/api/text', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const text = response.data; // Suponiendo que la API devuelve un objeto con una propiedad 'data'
    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el texto de la API' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
