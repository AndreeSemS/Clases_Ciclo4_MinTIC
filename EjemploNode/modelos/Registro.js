//Inicialización de paquetes
const mongo = require('mongoose');

//Esquema para la base de datos
let RegistroSchema = new mongo.Schema({
    id:Number,
    nombre:String,
    telefono:String
});

module.exports = mongo.model('formulario', RegistroSchema, 'Registro');