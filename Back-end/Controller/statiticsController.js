const Room = require('../Models/roomModel.js')
const Device = require('../Models/deviceModel.js')
const Stat = require('../Models/statisticModel.js')

exports.show = async (req, res) => {
  try {
    const roomList = await Room.find()
    const totalWh = await Promise.all(
      roomList.map(async (room) => {
        const devicesTotalWh = await Device.find({ roomId: room.id }).then(
          (deviceList) => {
            let totalWh = 0
            if (deviceList.length !== 0) {
              totalWh = deviceList.reduce((a, b) => {
                const duration = parseInt(b.duration)
                return a + (duration / 3600000) * 100
              }, 0)
            }
            return totalWh
          }
        )
        return {
          roomId: room.id,
          roomName: room.name,
          total: devicesTotalWh || 0,
        }
      })
    )
    res.status(200).json({
      status: 200,
      roomKWh: totalWh,
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 500, message: 'Server error' })
  }
}

exports.getAllDevice = async (req, res, next) => {
  const devices = await Device.find()
  const rooms = await Room.find()
  if (!devices || !rooms) {
    res.status(404).json({
      status: 404,
      message: 'Please add new device or room!',
    })
  }
  res.status(200).json({ devices: devices, rooms: rooms })
}

exports.getTotalkWhPerDay = (req, res, next) => {
  Stat.find({}).then((result) => {
    res.status(200).json({
      status: 200,
      data: result,
    })
  })
}
