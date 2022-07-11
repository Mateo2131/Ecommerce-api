import { Router } from 'express'
import Product from '../models/product.js'

const productsRouter = Router()

productsRouter.get('/', (req, res) => {
  return res.status(200).json()
})

productsRouter.get('/:id', (req, res) => {
  res.status(200).json()
})

productsRouter.post('/', (req, res) => {
  const { name, price, description, image } = req.body

  if (!name || !price || !description || !image) {
    return res.status(400).json({
      error: 'Missing required fields',
    })
  }
  else {
    const product = new Product({ name, price, description, image })

    product.save()
      .then(() => {
        return res.status(201).json(product)
      })
      .catch(error => {
        return res.status(400).json({
          error: error.message,
        })
      })
  }
  return
})

productsRouter.patch('/:id', (req, res) => {
  return res.json()
})

productsRouter.delete('/:id', (req, res) => {
  return res.json()
})

export default productsRouter