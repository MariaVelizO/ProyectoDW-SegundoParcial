const mongoose = require('mongoose')

// caracteristicas específicas a llenar si es un teléfoco
const TelefonoEsquema = new mongoose.Schema({
    sistemaOperativo: String,
    almacenamiento: Number,
    ram: Number,
    camara: String,
    bateria: String
}, { _id: false });  // Elimina el _id de los subdocumentos si no es necesario

// caracteristicas específicas a llenar si es una computadora
const LaptopEsquema = new mongoose.Schema({
    procesador: String,
    ram: Number,
    almacenamiento: Number,
    tarjetaGrafica: String,
    tamañoPantalla: Number
}, { _id: false });


//El esquema principal
const ProductoEsquema = new mongoose.Schema({
    
    nombre: {
        type: String,
        required: true,
    },
    
    precio: {
        type: Number,
        required: true,
    },

    color: {
        type: String,
        required: false
    },
    
    fechaIngreso: {
        type: Date,
        default: Date.now 
    },
    
    sucursal: {
        type: String,
        required: true
    },
    stock: {
        type: Number, //URL
        required: true
    },

    imagenUrl: {
        type: String, //URL
        required: false
    },

//Son esquemas separados con las características específicas que se van a llenar dependiendo del producto
    telefono: TelefonoEsquema,  // Solo se llena si es un teléfono
    laptop: LaptopEsquema       // Solo se llena si es una laptop
});


module.exports = mongoose.model('Producto', ProductoEsquema);