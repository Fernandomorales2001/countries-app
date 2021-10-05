var Municipio = require('../models/municipio');

function registrar(req,res){
    var data = req.body;

    var municipios = new Municipio();
    municipios.nombre = data.nombre;
    municipios.iddepartamento = data.iddepartamento;

    municipios.save((err,municipio_save)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(municipio_save){
                res.status(200).send({municipio: municipio_save});
            }else{
                res.status(403).send({message: 'El municipio no se pudo registrar'});
            }
        }
    });
}

function obtener_municipio(req,res) {
    var id = req.params['id'];

    Municipio.findById({_id:id},(err,municipio_data)=>{
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        } else {
            if (departamento_data) {
                res.status(200).send({municipio: municipio_data});
            } else {
                res.status(403).send({message: 'El departamento no existe'});
            }
        }
    });
}

function editar(req,res) {
    var id = req.params['id'];
    var data = req.body;

    Municipio.findByIdAndUpdate({_id:id},{nombre: data.nombre, iddepartamento: data.iddepartamento},(err,municipio_edit)=>{
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        } else {
            if (municipio_edit) {
                res.status(200).send({municipio: municipio_edit});
            } else {
                res.status(403).send({message: 'El municipio no se pudo actualizar'});
            }
        }
    });
}

function eliminar(req,res) {
    var id = req.params['id'];

    Municipio.findByIdAndRemove({_id:id},(err,municipio_delete)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(municipio_delete){
                res.status(200).send({municipio: municipio_delete});
            }else{
                res.status(403).send({message: 'El municipio no se pudo eliminar'}); 
            }
        }
    });
}

function listar(req,res){
    var titulo = req.params['titulo']; 

    Municipio.find({nombre: new RegExp(titulo,'i')}, (err,municipio_listado)=>{
        if(err){
            res.status(500).send({message: err});
        }else{
            if(municipio_listado){
                res.status(200).send({municipio: municipio_listado});
            }else{
                res.status(403).send({message: 'No hay registros con ese nombre'}); 
            }
        }
    });

}

module.exports = {
    registrar,
    obtener_municipio,
    editar,
    eliminar,
    listar

}