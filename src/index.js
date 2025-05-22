import { getProductoByNombre } from './bases/import-productos';

const venta = 49 //la cantidad limita de este producto es 50, después de 50 sale el catch

const getProductoByNombreAsync = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto= getProductoByNombre(nombre)
      if (venta <= producto.stock) {
        resolve(`producto: ${producto.nombre} vendido correctamente`)
      }else {
        reject("no se pudo completar la venta, revise la cantidad");
      }  
    }, 3000);
    
  });

}

getProductoByNombreAsync('Memoria USB 64GB')
  .then(console.log)
  .catch(console.error)
