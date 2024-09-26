const express = require('express')
const router = express.Router()
const {getAllProductos, getProductoporID, deleteProducto} = require('../controllers/productos.controllers')

//definir las funciones

//listar de producto Karla
router.get('/producto', getAllProductos);
//listar por id especifico de producto Karla
router.get('/producto/:id', getProductoporID);
//Borrar producto por nombre Vanne
router.delete('/deleteProducto/:nombre', deleteProducto);

module.exports = router;