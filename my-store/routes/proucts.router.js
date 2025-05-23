const express = require('express')

const ProductsService = require('../services/products.service.js')
const validatorHandler = require('../middlewares/validatorHandler.js')

const {createProductSchema, getProductSchema, updateProductSchema} = require('../schemas/product.dto.js')

const router = express.Router()
const service = new ProductsService()

router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
})

router.get('/:id', validatorHandler(getProductSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params
    const product = await service.findOne(id)
    res.status(200).json(product)
  } catch (err) {
    next(err)
  }
})

router.post('/', validatorHandler(createProductSchema, 'body'), async (req, res) => {
  const body = req.body
  const newProduct = await service.create(body)
  res.status(201).json({
    message: 'created',
    data: newProduct
  })
})

router.patch('/:id', validatorHandler(getProductSchema, 'params'), validatorHandler(createProductSchema, 'body'), async (req, res, next) => {
  try {
    const { id } = req.params
    const body = req.body
    const product = await service.update(id, body)
    res.json({ message: 'Product updated', product })
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  const prtDeleted = await service.delete(id)
  res.json({ message: 'producto eliminado', prtDeleted })
})

module.exports = router
