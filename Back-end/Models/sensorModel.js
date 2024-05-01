const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sensorSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  { timestamps: true }
)

const Sensor = mongoose.model('Sensor', sensorSchema)
module.exports = Sensor
