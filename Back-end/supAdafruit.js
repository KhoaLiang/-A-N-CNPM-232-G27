const SerialPort = require('serialport')
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://your-mqtt-server')

let portName = 'COM7' // Replace with your port name

const port = new SerialPort(portName, {
  baudRate: 115200,
})

let message = ''

function processData(data) {
  data = data.replace('!', '')
  data = data.replace('#', '')
  let splitData = data.split(':')
  console.log(splitData)
  if (splitData[1] === 'T') {
    client.publish('cambien1', splitData[2])
  }
  if (splitData[1] === 'H') {
    client.publish('cambien2', splitData[2])
  }
  if (splitData[1] === 'L') {
    client.publish('cambien3', splitData[2])
  }
}

function readSerial() {
  port.on('data', function (data) {
    message += data.toString()
    while (message.includes('#') && message.includes('!')) {
      let start = message.indexOf('!')
      let end = message.indexOf('#')
      processData(message.slice(start, end + 1))
      if (end === message.length) {
        message = ''
      } else {
        message = message.slice(end + 1)
      }
    }
  })
}

function writeData(data) {
  port.write(data.toString())
}

readSerial()
