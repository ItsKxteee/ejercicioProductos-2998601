import productos from './../data/productos';

export const getProductoById = (id) => productos.find((producto) => producto.id === id)

export const getProductoByNombre = (nombre) => productos.find((producto) => producto.nombre === nombre)