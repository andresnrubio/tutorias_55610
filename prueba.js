class Product {
    constructor(title, description, price, thumbnail, code, stock) {
      this.title = title || "";
      this.description = description || "";
      this.price = price || 0;
      this.thumbnail = thumbnail || "";
      this.code = code || "";
      this.stock = stock || 0;
    }

    returnProduct = () => { 
        return {
            'title': this.title,
            'price': this.price,
            'description': this.description,
            'thumbnail': this.thumbnail,
            'code': this.code,
            'stock': this.stock,
        }
    }
}
  
const producto1 = new Product(
    "Chocolate 1",
    "Chips de chocolate",
    1200,
    "🍫",
    "a1",
    10
);
const producto2 = new Product(
    "Chocolate 1",
    "Chips de chocolate",
    1200,
    "🍫",
    "a2",
    10
);
const producto3 = new Product(
    "Chocolate 1",
    "Chips de chocolate",
    1200,
    "🍫",
    "a3",
    10
);
  
const products = []
products.push(producto1.returnProduct())
products.push(producto2.returnProduct())
products.push(producto3.returnProduct())
  console.log(products)