console.clear()

import express, { Router } from 'express'
import productsRouter from './routes/product.js'

const PORT = 3000
const app = express()
const router = Router()

app.use(express.json())

app.use('/api/v1', router)
router.use('/products', productsRouter)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})