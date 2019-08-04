const mongoose = require('mongoose');
const User = require('../models/player');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const request = require('request');

const connUri = process.env.MONGO_LOCAL_CONN_URL;
const apiUrl = process.env.API_URL;

module.exports = {
    userLogin: (req, res) => {
        const { userName, password } = req.body;
        let result = {};
        let status = 200;
        let user = {
            userName: "linhnguyen",
            password: "123456"
        }

        request.post(apiUrl + 'login', {
            json: user
        }, (error, apiRes, body) => {
            if (error) {
                console.error(error)
                return
            }
            if (status == apiRes.statusCode) {
                // Create a token
                const payload = { user: user.userName };
                const options = { expiresIn: '2d', issuer: 'https://scotch.io' };
                const secret = process.env.JWT_SECRET;
                const token = jwt.sign(payload, secret, options);

                // console.log('TOKEN', token);
                result.token = token;
                result.status = status;
                result.result = body;
                //res.cookie('auth', token);
                //res.redirect('/');
                res.status(status).send(result);
            } else {
                status = 401;
                result.status = status;
                result.error = `Authentication error`;
                res.forward('/login');
            }
            //res.status(status).send(result);
            //console.log(`statusCode: ${apiRes.statusCode}`)
            //console.log(body)
        });
    },
    userRegister: (req, res) => {
        mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
            let result = {};
            let status = 201;
            if (!err) {
                const { name, password } = req.body;
                const user = new User({ name, password }); // document = instance of a model
                // TODO: We can hash the password here before we insert instead of in the model
                user.save((err, user) => {
                    if (!err) {
                        result.status = status;
                        result.result = user;
                    } else {
                        status = 500;
                        result.status = status;
                        result.error = err;
                    }
                    res.status(status).send(result);
                });
            } else {
                status = 500;
                result.status = status;
                result.error = err;
                res.status(status).send(result);
            }
        });
    },
    userBooking: (req, res) => {
        const page = {
            pageTitle: "User booking",
            breadCrumbTitle: "User booking"
        }
        res.render('user/user-booking', { "page": page });
    },
    userInfo: (req, res) => {
        const page = {
            pageTitle: "User Info",
            breadCrumbTitle: "User info"
        }
        res.render('user/user-info', { "page": page });
    }
}