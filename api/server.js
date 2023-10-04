const express = require('express');
const apiRoutes = require('./src/routes/index');
const app = express();
const port = process.env.PORT || 3000;
const videogameRoutes = require('./src/routes/videogame');
const videogamesRoutes = require('./src/routes/videogames');
const genresRoutes = require('./src/routes/genres');

// Middleware para procesar solicitudes JSON
app.use(express.json());

// Rutas de la API: Configura tus rutas aquí
app.use('/api', apiRoutes);
app.use('/videogame', videogameRoutes);
app.use('/videogames', videogamesRoutes);
app.use('/genres', genresRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor de la API escuchando en el puerto ${port}`);
});
