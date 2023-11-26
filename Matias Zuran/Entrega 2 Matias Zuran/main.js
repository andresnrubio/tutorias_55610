const { ProductManager } = require('./productManager')
const manager = new ProductManager('./files/products.txt')

manager.addProduct("producto repetido", 
"Este es un producto repetido",
300,
"Sin imagen", 
"asf123",
10)
console.log(manager.getProducts())