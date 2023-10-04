const { Router } = require('express');
const { Videogame } = require('../db.js'); // Asegúrate de importar el modelo Videogame

const router = Router();

// Ruta para obtener todos los videojuegos
router.get('/', async (req, res) => {
  try {
    // Consulta la base de datos para obtener todos los videojuegos
    const videogames = await Videogame.findAll();

    // Envía la lista de videojuegos como respuesta en formato JSON
    res.json(videogames);
  } catch (error) {
    // Maneja los errores aquí
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la lista de videojuegos' });
  }
});

// Otras rutas relacionadas con videojuegos pueden ir aquí

module.exports = router;
