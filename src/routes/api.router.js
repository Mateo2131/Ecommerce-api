import { Router } from 'express'
import productRouter from './product.router.js'
import categoryRouter from './category.router.js'

const RouterApi = Router()

RouterApi.use('/products', productRouter)
RouterApi.use('/categories', categoryRouter)

export default RouterApi