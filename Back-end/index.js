const express = require('express')
const { createServer } = require('node:http')
const { join } = require('node:path')
const mongoose = require('mongoose')
const session = require('express-session')
const dotenv = require('dotenv')
const mqtt = require('mqtt')

const settingRouter = require('./Routes/settingRoutes')
const authRouter = require('./Routes/authRoutes')
const homeRouter = require('./Routes/homeRoutes')
const statisticRouter = require('./Routes/statisticRoutes')

const app = express()
const port = 4000

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...')
  console.log(err.name, err.message)
  process.exit(1)
})

dotenv.config({ path: './config.env' })

// Use json format
app.use(express.json())

app.use((req, res, next) => {
  res.locals.session = req.session
  next()
})

let DB = `mongodb+srv://danghsnt134:danghsnt134@dacnpm.dlmovsa.mongodb.net/?retryWrites=true&w=majority&appName=DACNPM`
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'))

// ROUTES
app.use('/', homeRouter)
app.use('/auth', authRouter)
app.use('/setting', settingRouter)
app.use('/statistic', statisticRouter)

//MQTT with Adafruit

app.listen(4000, () => {
  console.log(`App listening at http://localhost:${port}`)
})
