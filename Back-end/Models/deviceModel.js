const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deviceSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Please tell us your device's name!"],
    },
    status: {
      type: Boolean,
      enum: ['true', 'false'],
      default: 'false',
    },
    type: {
      type: String,
      required: [true, "Please tell us your device's type!"],
    },
    roomId: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      default: 0,
      required: true,
    },
    lastUse: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
)

const Device = mongoose.model('Device', deviceSchema)

// module.exports.getAllDevice = async () => {
//   return await Device.find().catch((err) => console.log(err))
// }

module.exports = Device
