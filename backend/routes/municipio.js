var express = require('express');
var municipioController = require('../controllers/MunicipioController');

var api = express.Router();

api.post('/municipio/registrar',municipioController.registrar);
api.get('/municipio/:id',municipioController.obtener_municipio);
api.put('/municipio/editar/:id',municipioController.editar);
api.delete('/municipio/eliminar/:id',municipioController.eliminar);
api.get('/municipios/:titulo?',municipioController.listar);

module.exports = api;