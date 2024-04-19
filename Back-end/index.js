const express = require('express')
const { createServer } = require('node:http')
const { join } = require('node:path')
const mongoose = require('mongoose')
const session = require('express-session')
const cors = require('cors')
const dotenv = require('dotenv')
const mqtt = require('mqtt')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const settingRouter = require('./Routes/settingRoutes')
const authRouter = require('./Routes/authRoutes')
const homeRouter = require('./Routes/homeRoutes')
const statisticRouter = require('./Routes/statisticRoutes')

const app = express()
app.use(cors())
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

//SWAGGER
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'DADN-SmartHome',
      version: '1.0.0',
      description: 'SmartHome API',
    },
    servers: [
      {
        url: 'http://localhost:4000/',
      },
    ],
  },
  apis: ['./Routes/*.js'],
}

const specs = swaggerJsDoc(options)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))
// ROUTES
app.use('/', homeRouter)
app.use('/auth', authRouter)
app.use('/setting', settingRouter)
app.use('/statistic', statisticRouter)

//MQTT with Adafruit

app.listen(4000, () => {
  console.log(`App listening at http://localhost:${port}`)
})
