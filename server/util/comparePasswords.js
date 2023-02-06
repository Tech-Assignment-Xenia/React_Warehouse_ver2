const bcrypt = require('bcryptjs')

const comparePasswords = (inputPassword, hashPassword) =>
  bcrypt.compareSync(inputPassword, hashPassword)

module.exports = comparePasswords
