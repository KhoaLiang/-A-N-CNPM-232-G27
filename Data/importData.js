const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const Device = require('./../Models/deviceModel')
const Room = require('./../Models/roomModel')
const Admin = require('./../Models/adminModel')
const User = require('./../Models/userModel')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'))

// READ JSON FILE
const devices = JSON.parse(
  fs.readFileSync(`${__dirname}/devices.json`, 'utf-8')
)
const rooms = JSON.parse(fs.readFileSync(`${__dirname}/rooms.json`, 'utf-8'))
const admins = JSON.parse(fs.readFileSync(`${__dirname}/admins.json`, 'utf-8'))
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'))

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Device.create(devices)
    await Room.create(rooms)
    await Admin.create(admins)
    await User.create(users)
    console.log('Data successfully loaded!')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Device.deleteMany()
    await Room.deleteMany()
    await Admin.deleteMany()
    await User.deleteMany()
    console.log('Data successfully deleted!')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}

if (process.argv[2] === '--import') {
  importData()
} else if (process.argv[2] === '--delete') {
  deleteData()
}
