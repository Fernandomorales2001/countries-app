var Pais = require('../models/paises');

function registrar(req,res){
    var data = req.body;

    var pais = new Pais();
    pais.nombre = data.nombre;
    pais.region = data.region;

    pais.save((err,pais_save)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(pais_save){
                res.status(200).send({pais: pais_save});
            }else{
                res.status(403).send({message: 'El pais no se pudo registrar'});
            }
        }
    });
}

function obtener_pais(req,res) {
    var id = req.params['id'];

    Pais.findById({_id:id},(err,pais_data)=>{
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        } else {
            if (pais_data) {
                res.status(200).send({pais: pais_data});
            } else {
                res.status(403).send({message: 'El pais no existe'});
            }
        }
    });
}

function editar(req,res) {
    var id = req.params['id'];
    var data = req.body;

    Pais.findByIdAndUpdate({_id:id},{nombre: data.nombre, region: data.region},(err,pais_edit)=>{
        if (err) {
            res.status(500).send({message: 'Error en el servidor'});
        } else {
            if (pais_edit) {
                res.status(200).send({pais: pais_edit});
            } else {
                res.status(403).send({message: 'El pais no se pudo actualizar'});
            }
        }
    });
}

function eliminar(req,res) {
    var id = req.params['id'];

    Pais.findByIdAndRemove({_id:id},(err,pais_delete)=>{
        if(err){
            res.status(500).send({message: 'Error en el servidor'});
        }else{
            if(pais_delete){
                res.status(200).send({pais: pais_delete});
            }else{
                res.status(403).send({message: 'El pais no se pudo eliminar'}); 
            }
        }
    });
}

function listar(req,res){
    var titulo = req.params['titulo']; 

    Pais.find({nombre: new RegExp(titulo,'i')}, (err,pais_listado)=>{
        if(err){
            res.status(500).send({message: err});
        }else{
            if(pais_listado){
                res.status(200).send({pais: pais_listado});
            }else{
                res.status(403).send({message: 'No hay registros con ese titulo'}); 
            }
        }
    });

}

module.exports = {
    registrar,
    obtener_pais,
    editar,
    eliminar,
    listar

}