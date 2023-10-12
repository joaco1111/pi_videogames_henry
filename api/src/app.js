const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const db = require('./db.js');
const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Middleware para manejar las solicitudes CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Rutas de la API
app.use('/api', routes);

// Puerto en el que escucha la API
const PORT = process.env.PORT || 3000
;

app.listen(PORT, () => {
  console.log(`Servidor API en ejecución en el puerto ${PORT}`);
});
