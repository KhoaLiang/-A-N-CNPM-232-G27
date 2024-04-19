const mqtt = require('mqtt')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const AIO_USERNAME = process.env.AIO_USERNAME
const AIO_KEY = process.env.AIO_KEY
const AIO_FEED = process.env.AIO_FEED // Optional: Replace with your feed name

// MQTT Client Setup
const client = mqtt.connect('mqtt://io.adafruit.com', {
  username: AIO_USERNAME,
  password: AIO_KEY,
})

// Event: 'connect'
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
  // Process the received message
})

// Publish a message (optional)
client.publish(`${AIO_USERNAME}/feeds/${AIO_FEED}`, 'Hello from MQTT client!')

// Handle errors
client.on('error', (err) => {
  console.error('Error occurred:', err)
})
