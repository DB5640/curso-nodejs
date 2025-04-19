const express = require('express');
const { faker } = require('@faker-js/faker')

const router = express.Router();

// Get all categories
router.get('/', (req, res) => {
  const categories = [];
  const limit = parseInt(req.query.limit) || 10; // Optional limit query parameter
  for (let i = 0; i < limit; i++) {
    categories.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.department(),
      description: faker.lorem.sentence(),
    });
  }
  res.json(categories);
});

// Get a single category by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = {
    id,
    name: faker.commerce.department(),
    description: faker.lorem.sentence(),
  };
  res.json(category);
});

module.exports = router;
