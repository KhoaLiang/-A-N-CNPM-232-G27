import session from 'express-session'
import { Room } from '../Models/roomModel'
import { Device } from '../Models/deviceModel'
import { User } from '../Models/userModel.js'
import { genId } from './Utils.js';
import bcrypt from 'bcrypt';
import env from 'dotenv';

class userController {
    show = (req, res, next) => {
        res.render('partials/login', {
            layout: 'layouts/login.ejs',
            message: ''
        })
    }
    login = (req, res, next) => {
        const { email, password } = req.body;
        User.findOne({ email: email })
            .then(result => {
                bcrypt.compare(password, result.password, (err, isTrue) => {
                    if (isTrue) {
                        const user = {
                            name: result.name,
                            email: result.email
                        }
                        req.session.user = user;
                        res.redirect('/');
                    }
                    else if (!isTrue) {
                        res.render('partials/login', { layout: 'layouts/login.ejs', message: 'Password is incorrect!' });
                    }
                    if (err) console.log(err);
                })
            })
            .catch(err => console.log(err))

        // console.log(email, password);
    }
    logout = (req, res, next) => {
        if (req.session.user) {
            req.session.destroy((err) => {
                if (err) console.log(err);
                else res.redirect('/login');
            })
        }
    }
}

export default new userController;