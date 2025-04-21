const { faker } = require('@faker-js/faker')

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100
    Array.from({ length: limit },
      () => (
        this.products.push({
          id: faker.string.ulid(),
          name: faker.commerce.productName(),
          price: parseInt(faker.commerce.price()),
          image: faker.image.url()
        })
      )
    );
  }

  create(data){
    const newProduct = {
      id: faker.string.ulid(),
      ...data
    }
    this.products.push(newProduct)
    return newProduct
  }

  find(){
    return this.products
  }

  findOne(id){
    return this.products.find(product => product.id === id)
  }

  update(id, changes){
    const index = this.products.findIndex(product => product.id === id)
    if(index === -1){
      throw new Error('Product not found')
    }
    this.products[index] = changes;
    return this.products[index];
  }

  delete(id){
    const index = this.products.findIndex(product => product.id === id)
    if(index === -1){
      throw new Error('Product not found')
    }
    return this.products.splice(index, 1)
  }



}

module.exports = ProductsService;
