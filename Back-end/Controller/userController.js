const session = require('express-session')
const Room = require('../Models/roomModel.js')
const Device = require('../Models/deviceModel.js')
const User = require('../Models/userModel.js')

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

  req.session.user = user
  res.status(200).json({
    message: 'Success!',
  })
  res.redirect('/')

  if (err) () => console.log(err)
}

exports.logout = (req, res, next) => {
  if (req.session.user) {
    req.session.destroy((err) => {
      if (err) console.log(err)
      else res.redirect('/login')
    })
  }
}
