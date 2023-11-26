const { error } = require('console')
const { compareKeys } = require('./auxiliary functions/compareKeys')
const fs = require('fs')

//*************************************************** Product Class ***************************************************
class Product {
  constructor(title, description, price, thumbnail, code, stock, path) {
    this.title = title || ''
    this.description = description || ''
    this.price = price || 0
    this.thumbnail = thumbnail || ''
    this.code = code || 0
    this.stock = stock || 0
  }
}

//*************************************************** Product Manager ***************************************************
class ProductManager {
  constructor(path) {
    this.path = path
    fs.existsSync(path)
      ? (this.products = JSON.parse(fs.readFileSync(path, 'utf-8')))
      : (this.products = [])
  }

  addProductRaw(title, description, price, thumbnail, code, stock) {
    const product = new Product(
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    )
    this.addProduct(product)
  }

  addProduct(product) {
    const codeArray = this.products.map((product) => product.code)
    if (codeArray.includes(product.code)) {
      console.error('This code is already taken!')
    } else {
      const productNumber = this.products.length
      let selfIncrementingId
      !productNumber
        ? (selfIncrementingId = 0)
        : (selfIncrementingId = this.products[productNumber - 1].id + 1)

      const newProduct = { ...product, id: selfIncrementingId }
      this.products.push(newProduct)
      this.updateFile()
    }
  }

  getProducts() {
    return this.products
  }

  getProductById(id) {
    const foundProduct = this.products.find((element) => element.id === id)
    if (foundProduct) {
      //console.log(`Product with an id of ${id}`, foundProduct)
      return foundProduct
    } else {
      console.error(`Product with an id of ${id}`, 'Not Found')
    }
  }

  updateProduct(id, overrideObject) {
    if (!overrideObject.hasOwnProperty('id')) {
      const updatedProduct = { ...this.getProductById(id), ...overrideObject }
      if (compareKeys(updatedProduct, this.getProductById(id))) {
        this.products[id] = updatedProduct
        this.updateFile()
      } else {
        error('Wrong keys')
      }
    } else {
      error('Id of the object cannot be updated')
    }
  }

  deleteProduct(id) {
    this.products = this.products.filter((product) => product.id !== id)
    this.updateFile()
  }

  updateFile() {
    fs.writeFileSync(this.path, JSON.stringify(this.products))
  }
}

//*************************************************** Exports ***************************************************
module.exports = { Product, ProductManager }
