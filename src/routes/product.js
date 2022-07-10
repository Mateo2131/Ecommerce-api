import { Router } from 'express'
import createProducts from '../services/createProducts.js'

const productsRouter = Router()

productsRouter.get('/', (req, res) => {
  const limit = req.query.limit || 10

  const products = createProducts(limit)

  res.status(200).json(products)
})

productsRouter.get('/:id', (req, res) => {
  const id = req.params.id
  const product = { id, name: 'product' }

  res.status(200).json(product)
})

productsRouter.post('/', (req, res) => {
  const body = req.body
  res.status(201).json({
    message: 'Product created',
    data: body
  })
})

productsRouter.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  res.json({
    message: 'Product updated',
    id,
    data: { body }
  })
})

productsRouter.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    message: 'Product deleted',
    id
  })
})

export default productsRouter