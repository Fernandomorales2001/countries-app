var express = require('express');
var paisController = require('../controllers/PaisController');

var api = express.Router();

api.post('/pais/registrar',paisController.registrar);
api.get('/pais/:id',paisController.obtener_pais);
api.put('/pais/editar/:id',paisController.editar);
api.delete('/pais/eliminar/:id',paisController.eliminar);
api.get('/paises/:titulo?',paisController.listar);

module.exports = api;