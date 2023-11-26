class ProductManager {
    constructor() {
      this.products = [];
      this.idCounter = 0;
    }
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Error: Todos los campos son obligatorios");
        return;
      }
      if (this.products.find(product => product.code === code)) {
        console.log(`Error: El producto con código ${code} ya existe`);
        return;
      }
      this.products.push({
        id: ++this.idCounter,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      });
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        console.log(`Error: No se encontró el producto con id ${id}`);
        return;
      }
      return product;
    }
  }
  
  const manager = new ProductManager();


  manager.addProduct("Producto 1", "Descripción del producto 1", 10, "thumbnail1.jpg", "001", 5);
  manager.addProduct("Producto 2", "Descripción del producto 2", 20, "thumbnail2.jpg", 10);
  manager.addProduct("Producto 3", "Descripción del producto 3", 30, "thumbnail3.jpg", "003", 15);
  
  console.log(manager.getProductById(5));
  
