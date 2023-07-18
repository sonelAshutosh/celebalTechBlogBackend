import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import userRouter from './routing/userRoutes.js'
import blogRouter from './routing/blogRoutes.js'

const app = express()
dotenv.config()

const PORT = 5500
const URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@blog.ufnd36v.mongodb.net/?retryWrites=true&w=majority`

// ----------------------------------------------------------------
// Middleware
// ----------------------------------------------------------------
app.use(express.json())
app.use(
  cors({
    origin: '*',
  })
)
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', userRouter)
app.use('/blogs', blogRouter)

// ----------------------------------------------------------------
// Connections
// ----------------------------------------------------------------

mongoose.connect(URI).then(() => {
  app.listen(PORT, () => {
    console.log('Connected to Database')
    console.log(`App listening on PORT ${PORT}`)
  })
})
