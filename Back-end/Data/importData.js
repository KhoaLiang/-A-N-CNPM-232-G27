const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const Device = require('./../Models/deviceModel')
const Port = require('./../Models/portsModel')
const Room = require('./../Models/roomModel')
const Statistic = require('./../Models/statisticModel')
const User = require('./../Models/userModel')
const Sensor = require('./../Models/sensorModel')

dotenv.config({ path: './config.env' })

const DB = `mongodb+srv://danghsnt134:danghsnt134@dacnpm.dlmovsa.mongodb.net/?retryWrites=true&w=majority&appName=DACNPM`

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

const ports = JSON.parse(fs.readFileSync(`${__dirname}/ports.json`, 'utf-8'))
const rooms = JSON.parse(fs.readFileSync(`${__dirname}/rooms.json`, 'utf-8'))
// const statistics = JSON.parse(
//   fs.readFileSync(`${__dirname}/statistics.json`, 'utf-8')
// )
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'))
const statistics = JSON.parse(
  fs.readFileSync(`${__dirname}/statistics.json`, 'utf-8')
)
const sensors = JSON.parse(
  fs.readFileSync(`${__dirname}/sensors.json`, 'utf-8')
)

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Device.create(devices)
    await Port.create(ports)
    await Room.create(rooms)
    await User.create(users)
    await Statistic.create(statistics)
    await Sensor.create(sensors)
    console.log('Data successfully loaded!')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}

const importData2 = async () => {
  try {
    await Sensor.create(sensors)
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
    await Port.deleteMany()
    await Room.deleteMany()
    await Statistic.deleteMany()
    await User.deleteMany()
    await Sensor.deleteMany()
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
