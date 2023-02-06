const bcrypt = require('bcryptjs')

const users = [
  {
    email: 'john.doe@example.com',
    password: bcrypt.hashSync('john.doe@example.com', 10),
    hasAccess: true,
  },
  {
    email: 'jane.doe@example.com',
    password: bcrypt.hashSync('jane.doe@example.com', 10),
    hasAccess: false,
  },
]

module.exports = users
