import mongoose from 'mongoose'
const Schema = mongoose.Schema

const roomSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Please tell us your name!'],
    },
  },
  { timestamps: true }
)

const Room = mongoose.model('Room', roomSchema)
export default Room
