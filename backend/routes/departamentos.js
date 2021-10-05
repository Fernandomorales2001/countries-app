var express = require('express');
var departamentoController = require('../controllers/DepartamentoController');

var api = express.Router();

api.post('/departamento/registrar',departamentoController.registrar);
api.get('/departamento/:id',departamentoController.obtener_departamento);
api.put('/departamento/editar/:id',departamentoController.editar);
api.delete('/departamento/eliminar/:id',departamentoController.eliminar);
api.get('/departamentos/:titulo?',departamentoController.listar);

module.exports = api;