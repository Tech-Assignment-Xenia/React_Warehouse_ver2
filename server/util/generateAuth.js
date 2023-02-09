const jwt = require('jsonwebtoken')

const generatedAuthToken = (_id, email, hasAccess) => {
  return jwt.sign({ _id, email, hasAccess }, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h',
  })
}

module.exports = generatedAuthToken
