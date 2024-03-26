const express = require('express')
const { createServer } = require('node:http')
const { join } = require('node:path')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
const port = 3000

dotenv.config({ path: './config.env' })

let DB = process.env.DATABASE
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(4000, () => {
  console.log(`App listening at http://localhost:${port}`)
})
