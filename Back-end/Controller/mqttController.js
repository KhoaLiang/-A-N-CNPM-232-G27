const mqtt = require('mqtt')
const dotenv = require('dotenv')
const axios = require('axios')
const Sensor = require('../Models/sensorModel')

dotenv.config({ path: '../config.env' })

const AIO_USERNAME = 'Vaionic4711'
const AIO_KEY = 'aio_LpKr99STHGyVKFT7e4rL48TIVena'

exports.getTemperature = async (req, res) => {
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
    .then(async (response) => {
      console.log(response.data.value)
      const updatedSensor = await Sensor.findOneAndUpdate(
        { id: 1 },
        { value: response.data.value }
      )

      res.status(200).json(updatedSensor)
    })
    .catch((error) => {
      console.error('Error occurred:', error)

      // Send an HTTP response with status 500 and the error message
      res.status(500).send(error.message)
    })
}

exports.getHumidity = async (req, res) => {
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
    .then(async (response) => {
      console.log(response.data.value)
      const updatedSensor = await Sensor.findOneAndUpdate(
        { id: 2 },
        { value: response.data.value }
      )

      res.status(200).json(updatedSensor)
    })
    .catch((error) => {
      console.error('Error occurred:', error)
    })
}

exports.getBrightness = async (req, res) => {
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
    .then(async (response) => {
      console.log(response.data.value)
      const updatedSensor = await Sensor.findOneAndUpdate(
        { id: 3 },
        { value: response.data.value }
      )

      res.status(200).json(updatedSensor)
    })
    .catch((error) => {
      console.error('Error occurred:', error)
    })
}

exports.turnOnLight1 = (req, res) => {
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
