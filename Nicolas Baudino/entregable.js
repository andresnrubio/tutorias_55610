class ProductManager {
    constructor(){
        this.listOfProducts = [];
    }
    
    addProduct(product) {
        let idP = 0;
        if (this.listOfProducts.length == 0){
            idP = 1;
        }
        else {
            idP = this.listOfProducts[this.listOfProducts.length - 1].id + 1;
        }

        const hasCode = this.listOfProducts.find((element) => element.code == product.code);
        if(hasCode != undefined){
            console.log("El código esta repetido");
        } 
        else{
            this.listOfProducts.push({...product, id: idP});
        }
    }

    getProducts(){
        console.log(this.listOfProducts);
    }

    getProductById(productId){
        const hasId = this.listOfProducts.find((element) => element.id == productId);
        if (hasId == undefined){
            console.log("Not found");
        }
        else{
            console.log(hasId);
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

const PM = new ProductManager();

PM.getProducts();

PM.addProduct(new Product("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25));

PM.getProducts();

PM.addProduct(new Product("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25));

PM.getProductById(3);

PM.getProductById(1);





