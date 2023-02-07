const express = require('express')
const User = require('../model/UserModel')
const comparePasswords = require('../util/comparePasswords')
const generateAuthToken = require('../util/generateAuth')

const router = express.Router()

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!(email && password)) {
      return res.status(400).send('Auth failed. All fields are required')
    }
    const user = await User.findOne({ email })

    if (user && comparePasswords(password, user.password)) {
      let cookieParams = {
        httpOnly: true,
        sameSite: 'strict',
      }

      return res
        .cookie(
          'access_token',
          generateAuthToken(user._id, user.email, user.hasAccess),
          cookieParams
        )
        .json({
          success: 'User logged in',
          userLoggedIn: {
            _id: user._id,
            email: user.email,
            hasAccess: user.hasAccess,
          },
        })
    } else {
      return res.status(401).send('Invalid password or email entered')
    }
  } catch (err) {
    next(err)
  }
})

module.exports = router
