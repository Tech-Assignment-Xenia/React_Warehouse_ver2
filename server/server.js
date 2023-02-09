const express = require('express')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const app = express()

const authRoutes = require('./routes/auth')

const connectDB = require('./config/db')
connectDB()

app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(error)
  }
  next(error)
})

app.use((error, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    res.status(500).json({ message: error.message, stack: error.stack })
  } else {
    res.status(500).json({
      message: error.message,
    })
  }
})

app.use(express.json())
app.use(cookieParser())

//stores the session data on the client side within a cookie
app.use(
  cookieSession({
    name: 'session',
    keys: ['Xenia'],
    maxAge: 24 * 60 * 60 * 1000,
  })
)

app.use(authRoutes)

app.get('/get-token', (req, res) => {
  try {
    const accessToken = req.cookies['access_token']
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET_KEY)
    return res.json({
      email: decoded.email,
      hasAccess: decoded.hasAccess,
      expiresIn: decoded.exp,
    })
  } catch (err) {
    return res.status(401).send('Unauthorized. Invalid token')
  }
})

//production
const path = require('path')
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.json({ message: 'API running...' })
  })
}

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running...')
})
