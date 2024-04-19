const mongoose = require('mongoose')
const Schema = mongoose.Schema

const portSchema = new Schema(
  {
    port: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

const Port = mongoose.model('Port', portSchema)
module.exports = Port
