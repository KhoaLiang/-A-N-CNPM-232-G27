const session = require('express-session')
const Device = require('../Models/deviceModel.js')
const User = require('../Models/userModel.js')

exports.show = (req, res, next) => {
  User.find()
    .then((user) => {
      res.status(200).json({
        user: user[0],
      })
    })
    .catch((err) => console.log(err))
}

exports.updateProfile = (req, res, next) => {
  const { name, phone, email } = req.body
  User.findOneAndUpdate({ email: email }, { name: name, phone: phone })
    .then((result) => {
      res.status(200).json({
        status: 200,
        data: result,
        message: 'Update user successfully',
      })
    })
    .catch((err) => console.log(err))
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
