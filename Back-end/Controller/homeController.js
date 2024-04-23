const session = require('express-session')
const Room = require('../Models/roomModel.js')
const Device = require('../Models/deviceModel.js')
const Port = require('../Models/portsModel.js')
const User = require('../Models/userModel.js')
const Stat = require('../Models/statisticModel.js')

const { genId, updateStat } = require('./Utils.js')

exports.show = async (req, res, next) => {
  const  room  = 'A'; //req.query
  const rooms = await Room.find({}, 'name id')
  let currentRoomId
  if (room !== 'A') {
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].name.toLowerCase().split(' ').join('-') === room) {
        currentRoomId = rooms[i].id
        break
      }
    }
  } else {
    currentRoomId = rooms[0].id
  }

  const devices = await Device.find({ roomId: currentRoomId })
  res.status(200).json({
    rooms: rooms,
    currentRoomId: currentRoomId,
    devices: devices,
    temp: '--',
    humi: '--',
  })

  if (err) () => console.log(err)
}

exports.addNewRoom = (req, res, next) => {
  const roomName = req.body.name
  const newRoom = new Room({
    id: genId(),
    name: roomName,
  })
  newRoom
    .save()
    .then((result) => {
      res.status(200).json({
        status: 200,
        data: result,
      })
    })
    .catch((err) => console.log(err))
}

exports.getAllDevice = async (req, res, next) => {
  const devices = await Device.find()
  if (devices.length === 0) {
    res.status(404).json({
      status: 404,
      message: 'Please add new device',
    })
  }

  res.status(200).json({
    status: 200,
    data: devices,
  })
}

exports.getAllActiveDevice = async (req, res, next) => {
  const devices = await Device.find({ status: true })
  console.log(devices)
  if (devices.length === 0) {
    res.status(404).json({
      status: 404,
      message: 'There are no active devices',
    })
  } else {
    res.status(200).json({
      status: 200,
      data: devices,
    })
  }
}

exports.updateDevice = async (req, res, next) => {
  const { deviceId, deviceName } = req.body
  console.log(deviceId, deviceName)
  Device.findOneAndUpdate({ id: deviceId }, { name: deviceName })
    .then((result) => {
      res.status(200).json({
        status: 200,
        data: result,
        message: 'Update device successfully',
      })
    })
    .catch((err) => console.log(err))
}

exports.getNewDevice = async (req, res, next) => {
  const emptyPorts = await Port.find({ status: false })
  if (emptyPorts.length === 0) {
    res.status(404).json({
      status: 404,
      message: 'All ports have been used',
    })
  }
  res.status(200).json({
    status: 200,
    data: emptyPorts,
  })
}

exports.addNewDevice = (req, res, next) => {
  const { deviceName, deviceId, deviceType, roomId } = req.body
  const newDevice = new Device({
    id: deviceId,
    name: deviceName,
    status: false,
    type: deviceType,
    roomId: roomId,
    lastUse: new Date(),
  })
  newDevice
    .save()
    .then((result) => {
      Port.findOneAndUpdate({ port: deviceId }, { status: true })
        .then((_) => {
          const deviceStat = new Stat({
            deviceId: deviceId,
          })
          deviceStat
            .save()
            .then((_) => {
              res.status(200).json({
                status: 200,
                data: result,
              })
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
}

exports.toggleDevice = async (req, res, next) => {
  const { deviceId, deviceType, status } = req.body
  // Turn off
  if (status === 'false') {
    Device.findOne({ id: deviceId })
      .then((result) => {
        const currentTime = new Date()
        const usedTime = currentTime - result.lastUse
        const lastDuration = result.duration
        Device.findOneAndUpdate(
          { id: deviceId },
          {
            status: false,
            duration: usedTime + lastDuration,
          }
        )
          .then(async (result2) => {
            try {
              const result3 = await updateStat(
                deviceId,
                usedTime,
                result.lastUse
              )
              if (result3) {
                res.status(200).json({
                  status: 200,
                  data: result2,
                })
              }
            } catch (error) {
              res.status(200).json({
                status: 500,
                message: error,
              })
            }
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  } else if (status === 'true') {
    Device.findOneAndUpdate(
      { id: deviceId },
      {
        status: true,
        lastUse: new Date(),
      }
    )
      .then((result) => {
        res.status(200).json({
          status: 200,
          data: result,
        })
      })
      .catch((err) => console.log(err))
  }
}

exports.deleteDevice = (req, res, next) => {
  const _id = req.body.id
  Device.findOneAndDelete({ id: _id })
    .then((_) => {
      Port.findOneAndUpdate({ port: _id }, { status: false })
        .then((_) => {
          Stat.findOneAndDelete({ deviceId: _id })
            .then((deletedResult) => {
              res.status(200).json({
                status: 200,
              })
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err))
}
