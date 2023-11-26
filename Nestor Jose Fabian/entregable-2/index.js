const ProductManager = require('./ProductManager');

const filePath = 'productos.json';
const manager = new ProductManager(filePath);

// const newProduct = {
//   title: 'producto de ejemplo',
//   description: 'esta es una descripción de ejemplo',
//   price: 4500,
//   thumbnail: 'ruta/de/imagen.jpg',
//   code: 'PRODUCTO_002',
//   stock: 23
// };

// manager.addProduct(newProduct)
//   .then(id => {
//     console.log(`producto agregado con ID: ${id}`);
//   })
//   .catch(error => {
//     console.error('error:', error.message);
//   });
test = async ()=>{
const prueba = await manager.getProductById(1)
  console.log(prueba)
}
test()