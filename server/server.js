const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
require('dotenv').config()
const app = express()

const authRoutes = require('./routes/auth')

const connectDB = require('./config/db')
connectDB()

app.use(express.json())
app.use(cookieParser())

app.use(authRoutes)

//stores the session data on the client side within a cookie
app.use(
  cookieSession({
    name: 'session',
    keys: ['Xenia'],
    maxAge: 24 * 60 * 60 * 1000,
  })
)

app.use((error, req, res, next) => {
  const status = error.status || 500
  const message = error.message || 'Something went wrong.'
  res.status(status).json({ message: message })
})

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running...')
})
