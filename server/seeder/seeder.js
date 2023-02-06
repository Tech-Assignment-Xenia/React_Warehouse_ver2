//*seeder.js runs manually in console with command 'node seeder/seeder'

const connectDB = require('../config/db')
connectDB()

const usersData = require('./users')
const User = require('../model/UserModel')

const importData = async () => {
  try {
    await User.collection.deleteMany({})
    await User.insertMany(usersData)
    console.log('Data was proceeded to DB successfully')
    process.exit()
  } catch (error) {
    console.error(`Error while proceeding data: ${error.message}`)
    //Exit code 1 is for when unhandled fatal exceptions occur that was not handled by the domain
    process.exit(1)
  }
}

importData()
