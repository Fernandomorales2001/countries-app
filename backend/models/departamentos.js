var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var departamentoSchema = Schema({
    nombre: String,
    idpais: {type: Schema.ObjectId, ref: 'paises'},
});
//  {type: Schema.ObjectId, ref: 'producto'},

module.exports = mongoose.model('departamento',departamentoSchema);