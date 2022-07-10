console.clear()

import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import main from './db/mongo.js'

// Routes
import productRouter from './routes/product.router.js'

const PORT = 3040
const app = express()
main()

app.use(express.json())
app.use(cors())
app.use('/products', productRouter)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})