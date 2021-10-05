var Departamentos = require('../models/departamentos');

function registrar(req,res){
    var data = req.body;

    var departamentos = new Departamentos();
    departamentos.nombre = data.nombre;
    departamentos.idpais = data.idpais;

    departamentos.save((err,departamento_save)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(departamento_save){
                res.status(200).send({departamento: departamento_save});
            }else{
                res.status(403).send({message: 'El departamento no se pudo registrar'});
            }
        }
    });
}

function obtener_departamento(req,res) {
    var id = req.params['id'];

    Departamentos.findById({_id:id},(err,departamento_data)=>{
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        } else {
            if (departamento_data) {
                res.status(200).send({departamento: departamento_data});
            } else {
                res.status(403).send({message: 'El departamento no existe'});
            }
        }
    });
}

function editar(req,res) {
    var id = req.params['id'];
    var data = req.body;

    Departamentos.findByIdAndUpdate({_id:id},{nombre: data.nombre, idpais: data.idpais},(err,departamento_edit)=>{
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        } else {
            if (departamento_edit) {
                res.status(200).send({departamento: departamento_edit});
            } else {
                res.status(403).send({message: 'El departamento no se pudo actualizar'});
            }
        }
    });
}

function eliminar(req,res) {
    var id = req.params['id'];

    Departamentos.findByIdAndRemove({_id:id},(err,departamentos_delete)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(departamentos_delete){
                res.status(200).send({departamento: departamentos_delete});
            }else{
                res.status(403).send({message: 'El departamento no se pudo eliminar'}); 
            }
        }
    });
}

function listar(req,res){
    var titulo = req.params['titulo']; 

    Departamentos.find({nombre: new RegExp(titulo,'i')}, (err,departamento_listado)=>{
        if(err){
            res.status(500).send({message: err});
        }else{
            if(departamento_listado){
                res.status(200).send({departamento: departamento_listado});
            }else{
                res.status(403).send({message: 'No hay registros con ese nombre'}); 
            }
        }
    });

}

module.exports = {
    registrar,
    obtener_departamento,
    editar,
    eliminar,
    listar

}