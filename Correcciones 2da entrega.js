

// Secuencia UpdateProductsById

// por ejemplo para modificar el precio y stock del producto con id 4 de la base de datos deberiass poder enviar de esta forma el metodo:

 await manager.updateProduct(
    {
        price: 50,
        stock: 10,
        id: 4
    })

// de esta forma el metodo deberia:

//Va async
updateProduct({ id , ...newValues }) {

//**  esta es la secuencia para este metodo: */
    
//TODO      Buscar y guardar en una variable ( let ) el producto a modificar (podes usar el getProductById que ya tenes creado),
//TODO      Eliminar el original de thisProducts
//TODO      Modificar el que guardamos con la info que recibimos por parametros (aca podes usar el spread operator)
//TODO      Hacer push del producto modificado a this.products
    //TODO      Hacer el save
    
    
}

