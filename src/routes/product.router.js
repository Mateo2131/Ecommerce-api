import { Router } from 'express'

const productsRouter = Router()

productsRouter.get('/', (req, res) => {
  res.status(200).json()
})

productsRouter.get('/:id', (req, res) => {
  res.status(200).json()
})

productsRouter.post('/', (req, res) => {
  res.status(201).json()
})

productsRouter.patch('/:id', (req, res) => {
  res.json()
})

productsRouter.delete('/:id', (req, res) => {
  res.json()
})

export default productsRouter