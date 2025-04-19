
const express = require('express')
const { faker } = require('@faker-js/faker')

const router = express.Router();

router.get('/', (req, res) => {
    const products = Array.from({ length: 10 }, () => ({
      id: faker.string.ulid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.url()
    }));
    res.json(products);
  });

  router.get('/:id', (req, res) => {
      const { id } = req.params;
      res.json({
        id,
        name: 'Product 2',
        price: 2000
      })
    }
  )

  router.post('/', (req, res)=>{
    const body = req.body;
    res.json({
      message:'created',
      data: body
    })
  })

  module.exports = router;
