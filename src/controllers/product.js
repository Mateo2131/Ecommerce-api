import mongoose from 'mongoose'
import { Router } from 'express'
import Product from '../models/product.js'

const productsRouter = Router()

productsRouter.get('/', async (req, res) => {
  const page = req.query.page || 1

  try {
    const products = await Product.find({})
      .skip((page - 1) * 2)
      .limit(2)

    res.status(200).json({
      page: page,
      products: products
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

productsRouter.get('/:id', async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID' })
  }

  try {
    const product = await Product.findById(id)

    res.status(200).json({ product })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

productsRouter.post('/', async (req, res) => {
  const { title, price, description, image, category, stock } = req.body

  if (!title || !price || !description || !image || !category || !stock) {
    return res.status(400).json({ message: 'Missing required fields' })
  }

  const product = new Product({
    title,
    price,
    description,
    image,
    category,
    stock,
  })

  try {
    const savedProduct = await product.save()

    res.status(201).json(savedProduct)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }

})

productsRouter.delete('/', async (req, res) => {
  const { id } = req.query

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid id' })
  }

  try {
    const product = await Product.findByIdAndRemove(id)

    res.status(200).json(product)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }

})

productsRouter.patch('/', async (req, res) => {
  const { id } = req.query
  const body = req.body

  try {
    const product = await Product.findByIdAndUpdate(id, body)

    res.status(200).json({
      message: 'Product updated',
      product
    })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

export default productsRouter