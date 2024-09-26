const express = require('express')
const router = express.Router()
const {getAllProductos, getProductoporID, deleteProducto, addProducto} = require('../controllers/productos.controllers')

//definir las funciones

//creacion de  productos Carlos
router.post('/producto', addProducto);
//listar de producto Karla
router.get('/producto', getAllProductos);
//listar por id especifico de producto Karla
router.get('/producto/:id', getProductoporID);
//Actualizar un usuario María José 
router.put('/updateProducto/:id', updateProducto);
//Borrar producto por nombre Vanne
router.delete('/deleteProducto/:nombre', deleteProducto);

module.exports = router;