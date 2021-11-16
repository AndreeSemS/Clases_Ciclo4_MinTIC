//Inicialización de paquete express y mongoose
const express = require('express');
const app = express();
const mongo = require('mongoose');
//Inicialización de la ruta
const router = express.Router();
//Importación del esquema
const RegistroSchema = require('./modelos/Registro');

//Conexión a la base de datos
mongo.connect("mongodb+srv://ejemplo:0527@clusterejemplo.voyiw.mongodb.net/ejemploDB?retryWrites=true&w=majority");

//Configuración de servicios para las rutas
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//CRUD

router.get('/',(req, res)=>{
    res.send('Iniciando API');
});

router.get('/formulario', (req, res)=>{
    RegistroSchema.find((err, data)=>{
        if(err){
            console.log("Error en la consulta a la DB")
        }else{
            res.send(data);
        }
    });
});

router.post('/formulario', (req, res)=>{
    let nuevoRegistro = new RegistroSchema({
        id:req.body.id,
        nombre:req.body.nombre,
        telefono:req.body.telefono
    });

    nuevoRegistro.save((err, datos)=>{
        if(err){
            console.log(err);
        }
        res.send('Registro guardado con exito');
    });
});

app.use(router);

//Verificación de conexión 
app.listen(3000, ()=>{
    console.log("Servidor corriendo");
});