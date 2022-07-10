import mongoose from 'mongoose'
const { Schema, model } = mongoose

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
})

const Product = model('product', productSchema)

export default Product