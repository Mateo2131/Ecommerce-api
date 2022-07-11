import mongoose from 'mongoose'
const { model, Schema } = mongoose

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  }
})

const Category = new model('category', categorySchema)

export default Category