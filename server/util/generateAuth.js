const jwt = require('jsonwebtoken')

const generatedAuthToken = (_id, email) => {
  return jwt.sign({ _id, email }, process.env.JWT_SECRET_KEY, {
    expiresIn: '2h',
  })
}

module.exports = generatedAuthToken
