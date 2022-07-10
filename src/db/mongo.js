import mongoose from 'mongoose'

const URL = process.env.MONGO_DB_URL

const main = () => {
  mongoose.connect(URL)
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err))
}

export default main