const mqtt = require('mqtt')
const dotenv = require('dotenv')
const axios = require('axios')

dotenv.config({ path: '../config.env' })

exports.getTemperature = (req, res) => {
  const AIO_USERNAME = process.env.AIO_USERNAME
  const AIO_KEY = process.env.AIO_KEY

  // MQTT Client Setup
  const client = mqtt.connect('mqtt://io.adafruit.com', {
    username: AIO_USERNAME,
    password: AIO_KEY,
  })
  const AIO_FEED = 'cambien1'
  axios
    .get(
      `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${AIO_FEED}/data/last`,
      {
        headers: {
          'X-AIO-Key': AIO_KEY,
        },
      }
    )
    .then((response) => {
      console.log(response.data.value)
    })
    .catch((error) => {
      console.error('Error occurred:', error)
    })
}

exports.getHumidity = (req, res) => {
  const AIO_USERNAME = process.env.AIO_USERNAME
  const AIO_KEY = process.env.AIO_KEY

  // MQTT Client Setup
  const client = mqtt.connect('mqtt://io.adafruit.com', {
    username: AIO_USERNAME,
    password: AIO_KEY,
  })
  const AIO_FEED = 'cambien2'
  axios
    .get(
      `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${AIO_FEED}/data/last`,
      {
        headers: {
          'X-AIO-Key': AIO_KEY,
        },
      }
    )
    .then((response) => {
      console.log(response.data.value)
    })
    .catch((error) => {
      console.error('Error occurred:', error)
    })
}

exports.getBrightness = (req, res) => {
  const AIO_USERNAME = process.env.AIO_USERNAME
  const AIO_KEY = process.env.AIO_KEY

  // MQTT Client Setup
  const client = mqtt.connect('mqtt://io.adafruit.com', {
    username: AIO_USERNAME,
    password: AIO_KEY,
  })
  const AIO_FEED = 'cambien3'
  axios
    .get(
      `https://io.adafruit.com/api/v2/${AIO_USERNAME}/feeds/${AIO_FEED}/data/last`,
      {
        headers: {
          'X-AIO-Key': AIO_KEY,
        },
      }
    )
    .then((response) => {
      console.log(response.data.value)
    })
    .catch((error) => {
      console.error('Error occurred:', error)
    })
}

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

exports.turnOnFan = (req, res) => {
  const AIO_USERNAME = process.env.AIO_USERNAME
  const AIO_KEY = process.env.AIO_KEY

  // MQTT Client Setup
  const client = mqtt.connect('mqtt://io.adafruit.com', {
    username: AIO_USERNAME,
    password: AIO_KEY,
  })

  console.log(AIO_USERNAME)
  console.log(AIO_KEY)
  const AIO_FEED = 'quat1'
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

  client.publish(`${AIO_USERNAME}/feeds/${AIO_FEED}`, `100`)

  // Handle errors
  client.on('error', (err) => {
    console.error('Error occurred:', err)
  })
}

exports.turnOffFan = (req, res) => {
  const AIO_USERNAME = process.env.AIO_USERNAME
  const AIO_KEY = process.env.AIO_KEY

  // MQTT Client Setup
  const client = mqtt.connect('mqtt://io.adafruit.com', {
    username: AIO_USERNAME,
    password: AIO_KEY,
  })

  console.log(AIO_USERNAME)
  console.log(AIO_KEY)
  const AIO_FEED = 'quat1'
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
