const mqtt = require('mqtt')
const dotenv = require('dotenv')

dotenv.config({ path: '../config.env' })

exports.turnOnLight1 = (req, res) => {
  const AIO_USERNAME = process.env.AIO_USERNAME
  const AIO_KEY = process.env.AIO_KEY

  // MQTT Client Setup
  const client = mqtt.connect('mqtt://io.adafruit.com', {
    username: AIO_USERNAME,
    password: AIO_KEY,
  })

  console.log(AIO_USERNAME)
  console.log(AIO_KEY)
  const AIO_FEED = 'nutnhan1'
  client.on('connect', () => {
    console.log('Connected to Adafruit IO MQTT Broker')
    // Subscribe to a feed (optional)
    client.subscribe(`${AIO_USERNAME}/feeds/${AIO_FEED}`)
  })

  // Event: 'message'
  client.on('message', (topic, message) => {
    console.log(
      `Received message from topic: ${topic}, message: ${message.toString()}`
    )
  })

  client.publish(`${AIO_USERNAME}/feeds/${AIO_FEED}`, `1`)

  // Handle errors
  client.on('error', (err) => {
    console.error('Error occurred:', err)
  })
}

exports.turnOffLight1 = (req, res) => {
  const AIO_USERNAME = process.env.AIO_USERNAME
  const AIO_KEY = process.env.AIO_KEY
  const client = mqtt.connect('mqtt://io.adafruit.com', {
    username: AIO_USERNAME,
    password: AIO_KEY,
  })

  console.log(AIO_USERNAME)
  console.log(AIO_KEY)
  const AIO_FEED = 'nutnhan1'
  client.on('connect', () => {
    console.log('Connected to Adafruit IO MQTT Broker')
    // Subscribe to a feed (optional)
    client.subscribe(`${AIO_USERNAME}/feeds/${AIO_FEED}`)
  })

  // Event: 'message'
  client.on('message', (topic, message) => {
    console.log(
      `Received message from topic: ${topic}, message: ${message.toString()}`
    )
  })

  client.publish(`${AIO_USERNAME}/feeds/${AIO_FEED}`, `0`)

  // Handle errors
  client.on('error', (err) => {
    console.error('Error occurred:', err)
  })
}

exports.turnOnLight2 = (req, res) => {
  const AIO_USERNAME = process.env.AIO_USERNAME
  const AIO_KEY = process.env.AIO_KEY

  // MQTT Client Setup
  const client = mqtt.connect('mqtt://io.adafruit.com', {
    username: AIO_USERNAME,
    password: AIO_KEY,
  })

  console.log(AIO_USERNAME)
  console.log(AIO_KEY)
  const AIO_FEED = 'nutnhan2'
  client.on('connect', () => {
    console.log('Connected to Adafruit IO MQTT Broker')
    // Subscribe to a feed (optional)
    client.subscribe(`${AIO_USERNAME}/feeds/${AIO_FEED}`)
  })

  // Event: 'message'
  client.on('message', (topic, message) => {
    console.log(
      `Received message from topic: ${topic}, message: ${message.toString()}`
    )
  })

  client.publish(`${AIO_USERNAME}/feeds/${AIO_FEED}`, `1`)

  // Handle errors
  client.on('error', (err) => {
    console.error('Error occurred:', err)
  })
}

exports.turnOffLight2 = (req, res) => {
  const AIO_USERNAME = process.env.AIO_USERNAME
  const AIO_KEY = process.env.AIO_KEY
  const client = mqtt.connect('mqtt://io.adafruit.com', {
    username: AIO_USERNAME,
    password: AIO_KEY,
  })

  console.log(AIO_USERNAME)
  console.log(AIO_KEY)
  const AIO_FEED = 'nutnhan2'
  client.on('connect', () => {
    console.log('Connected to Adafruit IO MQTT Broker')
    // Subscribe to a feed (optional)
    client.subscribe(`${AIO_USERNAME}/feeds/${AIO_FEED}`)
  })

  // Event: 'message'
  client.on('message', (topic, message) => {
    console.log(
      `Received message from topic: ${topic}, message: ${message.toString()}`
    )
  })

  client.publish(`${AIO_USERNAME}/feeds/${AIO_FEED}`, `0`)

  // Handle errors
  client.on('error', (err) => {
    console.error('Error occurred:', err)
  })
}
