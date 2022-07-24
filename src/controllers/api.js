import { Router } from 'express'
import productRouter from './product.js'
import categoryRouter from './category.js'

const RouterApi = Router()

RouterApi.use('/products', productRouter)
RouterApi.use('/categories', categoryRouter)

export default RouterApi