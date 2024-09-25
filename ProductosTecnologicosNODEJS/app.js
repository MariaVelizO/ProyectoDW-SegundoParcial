const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3001
const productoRoutes = require('./routes/productos.routes')
app.use(express.json());

app.use('/api', productoRoutes)

app.get('/', (req, res) => {
    res.send('Bienvenido al sistema de Productos Tecnológicos!')
})

app.listen(port, () =>{
    console.log('El servidor esta listo')
});

mongoose.connect('mongodb://localhost:27017/productosTecnologicos').then(() => {
    console.log('Conexion a mongoDB exitosa')
})