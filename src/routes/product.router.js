import mongoose from 'mongoose'
import { Router } from 'express'
import Product from '../models/product.js'

const productsRouter = Router()

productsRouter.get('/', (req, res) => {
  Product.find()
    .then(products => {
      return res.status(200).json(products)
    })
    .catch(err => {
      return res.status(400).json({ error: err.message })
    })
})

productsRouter.post('/', (req, res) => {
  const body = req.body

  const product = new Product(body)

  product.save()
    .then(() => {
      return res.status(201).json(product)
    })
    .catch(err => {
      return res.status(400).json({ error: err.message })
    })

  return
})

productsRouter.delete('/', (req, res) => {
  const { id } = req.query

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid id' })
  }
  else {
    Product.findByIdAndRemove(id)
      .then(() => {
        return res.status(200).json({ message: 'Product deleted' })
      })
      .catch(err => {
        return res.status(400).json({ error: err.message })
      })
  }

  return
})

productsRouter.patch('/', (req, res) => {
  const { id } = req.query
  const body = req.body

  Product.findByIdAndUpdate(id,body)
    .then(() => {
      return res.status(200).json({ message: 'Product updated' })
    })
    .catch(err => {
      return res.status(400).json({ error: err.message })
    })
})

export default productsRouter