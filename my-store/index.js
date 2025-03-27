const express = require('express');
const { faker } = require('@faker-js/faker');


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/products', (req, res) => {
  const products = Array.from({ length: 10 }, () => ({
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price()),
    image: faker.image.imageUrl()
  }));
  res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
