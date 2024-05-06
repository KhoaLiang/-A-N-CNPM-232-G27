const session = require('express-session')
const Device = require('../Models/deviceModel.js')
const User = require('../Models/userModel.js')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const { promisify } = require('util')

exports.show = async (req, res, next) => {
  if (!req.cookies.jwt) {
    return res
      .status(401)
      .json('You are not logged in! Please log in to get access.')
  }

  let token = req.cookies.jwt

  const decoded = await promisify(jwt.verify)(
    token,
    'my-ultra-secure-and-ultra-long-secret'
  )

  const currentUser = await User.findById(decoded.id)
  if (!currentUser) {
    return res.status(401).json({
      message: 'The user belonging to this token does no longer exist.',
    })
  }
  res.status(200).json({
    user: currentUser,
  })
}

exports.updateProfile = (req, res, next) => {
  const { name, phone, email, image } = req.body
  User.findOneAndUpdate(
    { email: email },
    { name: name, phone: phone, image: image }
  )
    .then((result) => {
      res.status(200).json({
        status: 200,
        data: result,
        message: 'Update user successfully',
      })
    })
    .catch((err) => console.log(err))
}

exports.updatePassword = async (req, res) => {
  const { email, passwordCurrent, password } = req.body

  // Find the user
  const user = await User.findOne({ email })

  // Check if the current password is correct
  if (!user || !(passwordCurrent === user.password)) {
    throw new Error('Incorrect email or password')
  }

  // Update the password and name
  user.password = password
  await user.save()

  // Send response
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  })
}
exports.offEnergy = (req, res, next) => {
  Device.find({ status: true })
    .then((result) => {
      // No device turned on
      if (result.length == 0) {
        res.status(200).json({
          status: 304,
          message: 'No devices are running',
        })
      } else {
        for (let i = 0; i < result.length; i++) {
          const currentTime = new Date()
          const usedTime = currentTime - result[i].lastUse
          const lastDuration = result[i].duration
          const deviceId = result[i].id
          Device.findOneAndUpdate(
            { id: deviceId },
            {
              duration: usedTime + lastDuration,
              status: false,
            }
          ).exec()
        }
        res.status(200).json({
          status: 200,
        })
      }
    })
    .catch((err) => res.json(err))
}

exports.changeAddress = (req, res, next) => {
  const address = req.body.address
  const email = req.body.email
  // const email = req.session.user.email;
  console.log(address, email)
  User.findOneAndUpdate({ email: email }, { address: address })
    .then((result) => {
      res.status(200).json({
        status: 200,
        data: result,
        message: 'Update your address successfully',
      })
    })
    .catch((err) => console.log(err))
  // return res.redirect('/')
}

exports.getAllDevice = (req, res, next) => {
  Device.find()
    .then((result) =>
      res.status(200).json({
        status: 200,
        data: result,
      })
    )
    .catch((err) => console.log(err))
}
