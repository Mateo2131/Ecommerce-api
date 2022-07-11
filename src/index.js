console.clear()

import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import main from './db/mongo.js'

// Routes
import apiRouter from './routes/api.router.js'

const PORT = process.env.PORT || 3040
const app = express()
main()

app.use(express.json())
app.use(cors())
app.use('/api/v1', apiRouter)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})