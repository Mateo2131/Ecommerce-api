import mongoose from 'mongoose'
import Category from '../models/category.js'
import { Router } from 'express'

const categoriesRouter = Router()

categoriesRouter.get('/', (req, res) => {
  Category.find()
    .then(categories => {
      return res.status(200).json(categories)
    })
    .catch(err => {
      return res.status(400).json({ error: err.message })
    })
})

categoriesRouter.post('/', (req, res) => {
  const body = req.body

  const category = new Category(body)

  category.save()
    .then(() => {
      return res.status(201).json(category)
    })
    .catch(err => {
      return res.status(400).json({ error: err.message })
    })

  return
})

categoriesRouter.delete('/:id', (req, res) => {
  const id = req.params.id

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid id' })
  }
  else {
    Category.findByIdAndRemove(id)
      .then(() => {
        return res.status(204).json({ message: 'Category deleted' })
      })
      .catch(err => {
        return res.status(400).json({ error: err.message })
      })
  }

  return
})

export default categoriesRouter
