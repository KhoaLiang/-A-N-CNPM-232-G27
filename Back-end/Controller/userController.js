const session = require('express-session')
const Room = require('../Models/roomModel.js')
const Device = require('../Models/deviceModel.js')
const User = require('../Models/userModel.js')
const jwt = require('jsonwebtoken')

// Test

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
}
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id)
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: false,
  }
  cookieOptions.secure = false

  res.cookie('jwt', token, cookieOptions)

  // Remove password from output
  user.password = undefined

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  })
}

exports.show = async (req, res, next) => {
  const email = req.body.email
  const user = await User.findOne({ email: email })
  res.status(200).json({
    user: user,
  })
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  // console.log(email, password);

  if (!email || !password) {
    res.status(400).json({
      message: 'Please provide email and password!',
    })
  }

  const user = await User.findOne({ email }).select('+password')

  if (!user || password !== user.password) {
    res.status(401).json({
      message: 'Incorrect email or password!',
    })
  }

  createSendToken(user, 200, res)
}

exports.logout = (req, res, next) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 1 * 1000),
    httpOnly: false,
  })
  res.status(200).json({ status: 'success' })
}
