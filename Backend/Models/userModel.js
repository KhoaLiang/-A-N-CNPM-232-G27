import mongoose from 'mongoose'
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema(
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
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
      select: false,
    },
    phone: {
      type: String,
      required: [true, 'Please provide a phone'],
      minlength: 10,
      maxlength: 10,
    },
    address: {
      type: String,
      required: [true, 'Please provide a address'],
    },
    vnid: {
      type: String,
      required: [true, 'Please provide a VNID'],
      minlength: 12,
      maxlength: 12,
    },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)
export default User
