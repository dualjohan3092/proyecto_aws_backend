const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.BACKEND_DOCKER_PORT || 3000;
app.use(cors());

app.get('/api', (req, res) => {
  res.send('¡Hola Mundo desde el backend!');
});

app.listen(port, () => {
  console.log('El servidor del backend está corriendo en', process.env.BACKEND_DOCKER_PORT);
});