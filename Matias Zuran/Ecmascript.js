//************************************************************************************************************ 
//Declarations
class Product {
 constructor(title, description, price, thumbnail, code, stock) {
   this.title = title || ''
   this.description = description || ''
   this.price = price || 0
   this.thumbnail = thumbnail || ''
   this.code = code || 0
   this.stock = stock || 0
 }
}

class ProductManager {
 constructor() {
   this.products = []
 }

 addProductRaw(title, description, price, thumbnail, code, stock) {
   const product = new Product( title, description, price, thumbnail, code, stock, )
   this.addProductClass(product)
 }

 addProductClass(product) {
   const codeArray = this.products.map(product => product.code)
   if (codeArray.includes(product.code)) {
       console.error("This code is already taken!")
   } else {
       const newProduct = {...product, "id": this.products.length}
       this.products.push(newProduct)
   }
 }

 getProducts() {
   console.log("Entire product list", this.products)
 }

 getProductById(id) {
   const foundProduct = this.products.find((element) => element.id === id)
   if (foundProduct) {
       console.log(`Product with an id of ${id}`, foundProduct)
   } else {
       console.error(`Product with an id of ${id}`, "Not Found")
   }
 }
}

const urls = {
   banana: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Banana.png/836px-Banana.png",
   apple: "https://purepng.com/public/uploads/large/purepng.com-red-appleapplemalus-domesticafruitdeliciousred-apple-1701527165367egm80.png"
}

//************************************************************************************************************
//Usage 
const manager = new ProductManager()
manager.addProductRaw("Banana", "It's yellow", 1, urls.banana, "bananaCode", 5)
manager.addProductRaw("Banana", "It's yellow", 1, urls.banana, "bananaCode", 5)
manager.addProductRaw("Apple", "It's red", 2, urls.apple, "appleCode", 2)
manager.getProducts()
manager.getProductById(15)

