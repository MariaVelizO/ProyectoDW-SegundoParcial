const express = require('express')
const router = express.Router()
const {getAllProductos, getProductoporID} = require('../controllers/productos.controllers')

//definir las funciones

//listar de producto Karla
router.get('/producto', getAllProductos);
//listar por id especifico de producto Karla
router.get('/producto/:id', getProductoporID);


module.exports = router;