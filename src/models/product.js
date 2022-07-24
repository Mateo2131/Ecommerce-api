import mongoose from 'mongoose'
const { Schema, model } = mongoose
import mongooseUniqueArray from 'mongoose-unique-array'

const productSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  stock: Number,
})

productSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  }
})

productSchema.plugin(mongooseUniqueArray)

const Product = model('product', productSchema)

export default Product