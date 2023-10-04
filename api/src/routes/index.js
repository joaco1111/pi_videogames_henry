const { Router } = require("express");
const videogames = require("./videogames.js");
const genres = require('./genres.js');
const videogame = require('./videogame.js');
const router = Router();
const controllers = require("../controllers/index");

// Ruta principal de la API
router.get('/', (req, res) => {
  res.send('Bienvenido a la API de videojuegos');
});

// Tablas
router.use('/videogame', controllers.videogame);
router.get('/videogames', async (req, res) => {
  try {
    const videogames = await controllers.getVideogamesAsync();
    res.json(videogames);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/genres', async (req, res) => {
  try {
    const genres = await controllers.getGenresAsync();
    res.json(genres);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
