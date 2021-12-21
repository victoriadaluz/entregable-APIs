const express = require('express');
const router = express.Router();
const actorsAPIController = require('../../controllers/api/actorsAPIController');

//Rutas
//Listado de todos los actores/actrices
router.get('/', actorsAPIController.list);
//Detalle del actor/actriz
router.get('/:id', actorsAPIController.detail);
//En que peliculas trabajo el actor con cierto ID
router.get('/:id/movies', actorsAPIController.actorMovies);

//Agregar actor/actriz
router.post('/create', actorsAPIController.create);
//Modificar un actor/actriz
router.put('/update/:id', actorsAPIController.update);
//Eliminar un actor/actriz
router.delete('/delete/:id', actorsAPIController.destroy);

module.exports = router;