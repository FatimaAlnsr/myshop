const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const { notFound, errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const product = require('./routes/product')

dotenv.config()

connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', product)

//if the user enter a url that doesnt exist this error handler will handle it
app.use(notFound)
//This error handler doesnt seem to catch anything since iam using try/catch/
//will keep it for a while and see if there is any use to it!
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server is runnung in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .bold
  )
)
