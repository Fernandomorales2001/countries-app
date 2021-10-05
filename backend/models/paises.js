var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var paisesSchema = Schema ({
    nombre: String,
    region: String,
});

module.exports = mongoose.model('paises',paisesSchema);