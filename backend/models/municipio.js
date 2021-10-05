var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var municipioSchema = Schema({
    nombre: String,
    iddepartamento: {type: Schema.ObjectId, ref: 'departamentos'},
});

module.exports = mongoose.model('municipio',municipioSchema);