const Productos = require('../models/productos.model')

//exportación de los métodos
//Karla
exports.getAllProductos = async (req, res)=> {
    const productos = await Producto.find();
    res.status(200).json(productos);
};

//Karla
exports.getProductoporID = async (req, res) => {
    try {
        const idproducto = req.params.id;  

        const producto = await Producto.findById(idproducto);

        if (!producto) {
            return res.status(404).send({ mensaje: 'Producto no encontrado' });
        }

        res.status(200).json(producto);
    } catch (error) {
        console.error('Error al obtener el producto:', error);
        res.status(500).send({ mensaje: 'Error al obtener el producto' });  
    }
};


//Carlos
exports.addProducto = async (req, res) => {
    try {
        console.log(req.body);
        const nuevoProducto = await Producto.create(req.body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(500).json({ message: 'Error al crear el producto', error});
    }
};



//Vanne
exports.deleteProducto = async(req, res) => {  
    const { nombre }= req.params;
    try {
    const producto = await Producto.deleteMany({nombre});

    if(!producto){
        //fallido
        return res.status(404).send({ mensaje: 'Producto no encontrado'});
    }
    res.status(200).json(producto)
}catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar los productos."});
}
};

