const fs = require("fs");
class ProductManager {
    constructor(path){
        this.path = path;
        try {
            let products = fs.readFileSync(this.path, "utf-8");
            this.listOfProducts = JSON.parse(products);
        } catch {
            this.listOfProducts = [];
        }
    }
    
    async addProduct(product) {
        if(!product){
            return console.log("El producto esta vacío");
        }

        let idP = 0;
        if (this.listOfProducts.length == 0){
            idP = 1;
        }
        else {
            idP = this.listOfProducts[this.listOfProducts.length - 1].id + 1;
        }

        const existingId = this.listOfProducts.find((element) => element.code == product.code);
        if(existingId){
            console.log("El producto ya existe");
        } 
        else{
            
            this.listOfProducts.push({...product, id: idP});
            await fs.promises.writeFile(this.path, JSON.stringify(this.listOfProducts, null, "\t"));
        }
    }

    getProducts(){
        console.log(this.listOfProducts);
    }

    getProductById(productId){
        const existingProduct = this.listOfProducts.find((element) => element.id == productId);
        if (existingProduct == undefined){
            console.log("Not found with id " + productId);
        }
        else{
            console.log(existingProduct);
        }
    }

    async updateProduct(productId, newData){
        const index = this.listOfProducts.findIndex((element) => element.id == productId);
        if (index >= 0){
            this.listOfProducts[index] = { ...this.listOfProducts[index], ...newData }
            
            await fs.promises.writeFile(this.path, JSON.stringify(this.listOfProducts, null, "\t"));
        }
        else {
            console.log("Producto no encontrado con ese ID");
        }
    }

    async deteleProduct(productId){
        const existingProduct = this.listOfProducts.find((element) => element.id == productId);
        if (existingProduct){
            const newProducts = this.listOfProducts.filter((element) => element.id != productId);

            this.listOfProducts = newProducts;

            await fs.promises.writeFile(this.path, JSON.stringify(this.listOfProducts, null, "\t"));
        }
        else {
            console.log("El producto que desea eliminar no existe")
        }
    }
}

class Product {
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title,
        this.description = description,
        this.price = price,
        this.thumbnail = thumbnail,
        this.code = code,
        this.stock = stock
    }
}

async function Ejecutar(){
    const PM = new ProductManager("./texto.txt");

    // PM.getProducts();

    // await PM.addProduct(new Product("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25));
    // await PM.addProduct(new Product("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc1234", 25));
    // await PM.addProduct(new Product("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc1235", 25));
    // await PM.addProduct(new Product("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc1236", 25));

    // // PM.getProducts();

    // PM.getProductById(3);

    // PM.getProductById(1);
    
    // await PM.updateProduct(1, {description: "asd"});
    
    // PM.getProductById(1);
    // // PM.getProducts();

    // await PM.deteleProduct(3);

    // PM.getProducts();
}

Ejecutar();