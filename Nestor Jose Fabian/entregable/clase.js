const manager = new ProductManager();


manager.addProduct("Producto 1", "Descripción del producto 1", 10, "thumbnail1.jpg", "001", 5);
manager.addProduct("Producto 2", "Descripción del producto 2", 20, "thumbnail2.jpg", "002", 10);
manager.addProduct("Producto 3", "Descripción del producto 3", 30, "thumbnail3.jpg", "003", 15);

console.log(manager.getProducts());


// [
//   {
//     id: 1,
//     title: "Producto 1",
//     description: "Descripción del producto 1",
//     price: 10,
//     thumbnail: "thumbnail1.jpg",
//     code: "001",
//     stock: 5
//   },
//   {
//     id: 2,
//     title: "Producto 2",
//     description: "Descripción del producto 2",
//     price: 20,
//     thumbnail: "thumbnail2.jpg",
//     code: "002",
//     stock: 10
//   },
//   {
//     id: 3,
//     title: "Producto 3",
//     description: "Descripción
