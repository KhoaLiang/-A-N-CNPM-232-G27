const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://io.adafruit', {
  username: 'Vaionic4711',
  password: 'aio_XWfj47rkccsimlrmD3cwUoolIdYw',
})

const AIO_FEED_IDs = ['nutnhan1', 'nutnhan2', 'quat1', 'quat2']

client.on('connect', function () {
  console.log('Ket noi thanh cong ...')
  AIO_FEED_IDs.forEach((topic) => {
    client.subscribe(topic)
  })
})

client.on('message', function (topic, message) {
  console.log('Nhan du lieu: ' + message.toString() + ', feed id: ' + topic)
  // Logic to handle messages goes here
  if (topic === 'nutnhan1') {
    if (message.toString() === '0') {
      writeData('T1', topic)
    } else {
      writeData('B1', topic)
    }
  }
  if (topic === 'nutnhan2') {
    if (message.toString() === '0') {
      writeData('T2', topic)
    } else {
      writeData('B2', topic)
    }
  }
  if (topic === 'quat1') {
    if (message.toString() === '0') {
      writeData(0, topic)
    } else {
      if (message.toString() === '20') {
        writeData(1, topic)
      } else if (message.toString() === '40') {
        writeData(2, topic)
      } else if (message.toString() === '60') {
        writeData(3, topic)
      } else if (message.toString() === '80') {
        writeData(4, topic)
      } else if (message.toString() === '100') {
        writeData(5, topic)
      }
    }
  }
})

client.on('disconnect', function () {
  console.log('Ngat ket noi ...')
  process.exit(1)
})

client.on('subscribe', function () {
  console.log('Subscribe thanh cong ...')
})

// let counter = 10
// setInterval(() => {
//   counter = counter - 1
//   if (counter <= 0) {
//     counter = 10
//     // Logic to publish data goes here
//     const data = 'Your data here' // Replace this with the actual data you want to publish
//     const topic = 'Your topic here' // Replace this with the actual topic you want to publish to
//     client.publish(topic, data)
//   }
//   // readSerial(client);
// }, 1000)

function writeData(data, topic) {
  client.publish(topic, data)
}
