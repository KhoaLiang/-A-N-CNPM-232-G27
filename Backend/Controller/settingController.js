import session from 'express-session'
import { Room } from '../Models/roomModel'
import { Device } from '../Models/deviceModel'
import { User } from '../Models/userModel'
import { genId } from './Utils.js';
import bcrypt from 'bcrypt';
import env from 'dotenv';
class settingController {
    show = (req, res, next) => {
        res.render('partials/login', {
            layout: 'layouts/login.ejs',
            message: ''
        })
    }
    offEnergy = (req, res, next) => {
        Device.find({ status: true })
            .then(result => {
                // No device turned on
                if (result.length == 0) {
                    res.status(200).json({
                        status: 304
                    })
                }
                else {
                    for (let i = 0; i < result.length; i++) {
                        const currentTime = new Date();
                        const usedTime = currentTime - result[i].lastUse;
                        const lastDuration = result[i].duration;
                        const deviceId = result[i].id;
                        Device.findOneAndUpdate({ id: deviceId }, {
                            duration: usedTime + lastDuration,
                            status: false
                        }).exec();
                    }
                    res.status(200).json({
                        status: 200
                    })
                }
            }).catch(err => res.json(err))
    }
    updateProfile = (req, res, next) => {
        const { name, phone, email } = req.body;
        User.findOneAndUpdate({ email: email }, { name: name, phone: phone })
            .then(result => {
                res.status(200).json({
                    status: 200,
                    data: result,
                    message: 'Update user successfully'
                })
            }).catch(err => console.log(err))

        // return res.redirect('/')
    }
    changeMyHome = (req, res, next) => {
        const address = req.body.address;
        const email = req.body.email;
        // const email = req.session.user.email;
        console.log(address, email);
        User.findOneAndUpdate({ email: email }, { address: address })
            .then(result => {
                res.status(200).json({
                    status: 200,
                    data: result,
                    message: 'Update your home successfully'
                })
            }).catch(err => console.log(err))
        // return res.redirect('/')
    }
}

export default new settingController;