const Room = require('../Models/roomModel.js')
const Device = require('../Models/deviceModel.js')
const Stat = require('../Models/statisticModel.js')

exports.show = async (req, res) => {
  Room.find()
    .then((roomList) => {
      const totalWh = roomList.map(async (room) => {
        const devicesTotalWh = await Device.find({ roomId: room.id }).then(
          (deviceList) => {
            let totalWh = 0
            if (deviceList.length !== 0) {
              totalWh = deviceList.reduce((a, b) => {
                return a + parseInt(b.duration / 3600000) * parseInt(b.capacity)
              }, 0)
            }
            return totalWh
          }
        )
        return {
          roomId: room.id,
          roomName: room.name,
          total: devicesTotalWh,
        }
      })
      Promise.all(totalWh).then((result) => {
        res.status(200).json({
          status: 200,
          roomKWh: result,
        })
      })
    })
    .catch((err) => console.log(err))
}

exports.getAllDevice = async (req, res, next) => {
  const devices = Device.find()
  const rooms = Room.find()
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
