const fs = require('fs');

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
  }

  async addProduct(product) {
    try {
      const products = await this.getProductsFromFile();
      product.id = this.generateNextId(products);
      products.push(product);
      await this.saveProductsToFile(products);
      return product.id;
    } catch (error) {
      throw new Error('error agregando producto: ' + error.message);
    }
  }

  async getProducts() {
    try {
      return await this.getProductsFromFile();
    } catch (error) {
      throw new Error('error listando productos: ' + error.message);
    }
  }

  async getProductById(id) {
    try {
      const products = await this.getProductsFromFile();
      return products.find(product => product.id === id);
    } catch (error) {
      throw new Error('error listando producto por ID: ' + error.message);
    }
  }

  async updateProduct(id, updatedFields) {
    try {
      let products = await this.getProductsFromFile();
      const productIndex = products.findIndex(product => product.id === id);
      if (productIndex !== -1) {
        products[productIndex] = { ...products[productIndex], ...updatedFields };
        await this.saveProductsToFile(products);
        return true;
      }
      return false;
    } catch (error) {
      throw new Error('error actualizando producto: ' + error.message);
    }
  }

  async deleteProduct(id) {
    try {
      let products = await this.getProductsFromFile();
      const updatedProducts = products.filter(product => product.id !== id);
      await this.saveProductsToFile(updatedProducts);
      return true;
    } catch (error) {
      throw new Error('error borrando producto: ' + error.message);
    }
  }

  async getProductsFromFile() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.path, 'utf8', (err, data) => {
        if (err) {
          if (err.code === '') {
            resolve([]);
          } else {
            reject(err);
          }
        } else {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(error);
          }
        }
      });
    });
  }

  async saveProductsToFile(products) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.path, JSON.stringify(products, null, 2), 'utf8', err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  generateNextId(products) {
    const maxId = products.reduce((max, product) => (product.id > max ? product.id : max), 0);
    return maxId + 1;
  }
}

module.exports = ProductManager;
