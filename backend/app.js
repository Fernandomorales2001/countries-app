var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT ||  4201;

//ROUTES
var user_routes = require('./routes/user');
var pais_routes = require('./routes/paises');
var departamento_routes = require('./routes/departamentos');
var municipio_routes = require('./routes/municipio');

var app = express();

mongoose.connect('mongodb://localhost:27017/paises',{useUnifiedTopology: true, useNewUrlParser: true},(err,res)=>{
    if(err){
        throw err;
    }
    else{
        console.log("Corriendo servidor");
        app.listen(port, function(){
            console.log("Servidor conectado en " + port);
            
        });
        
    }
});




app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use((req,res,next)=>{
    res.header('Content-Type: application/json');
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.use('/api',user_routes);
app.use('/api',pais_routes);
app.use('/api',departamento_routes);
app.use('/api',municipio_routes);

module.exports = app;