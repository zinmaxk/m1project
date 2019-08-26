const request = require('request');
const api = require('../api');

const connUri = process.env.MONGO_LOCAL_CONN_URL;
const apiUrl = process.env.API_URL;
const processJsonData = require('../helper/utils').processJsonData;
const convertServerDateToString = require('../helper/utils').convertServerDateToString;

module.exports = {
    getAllSchedule: (req, res) => {
        const page = {
            pageTitle: "Schedule list",
            breadCrumbTitle: "Schedule list"
        };

        api.getSchedules({}, function (error, response, body) {
            let scheduleList = processJsonData(body);
            res.render('schedule-list', {page: page, scheduleList: scheduleList, user: req.session.user, message: req.flash('message')});
        });
    },
    membership: (req, res) => {
        api.getMemberships({}, function (error, response, body) {
            const page = {
                pageTitle: "OUR PRICE",
                breadCrumbTitle: "Membership"
            }
            let data = processJsonData(body);
            let playerPricing = [];
            let ownerPricing = [];

            if (data) {
                playerPricing = data.filter(item => item.type == 'player');
                ownerPricing = data.filter(item => item.type == 'owner');
            }

            res.render('membership', {"page": page, playerPricing: playerPricing, ownerPricing: ownerPricing});
        });
    },
    bookASchedule: (req, res) => {
        let user = req.session.user;
        if (user.category != 2) {
            res.redirect('/schedule-list');
            return;
        }

        const page = {
            pageTitle: "Booking Form",
            breadCrumbTitle: "Booking Form"
        };

        api.getScheduleById(req.params, req.session.user.token, function (error, response, body) {
            let data = processJsonData(body);

            if (req.method == 'POST') {
                let insertData = {
                    userAccount: user.userId,
                    scheduleId: data.scheduleId,
                    bookedDate: data.scheduleDate,
                };

                api.createBooking(insertData, req.session.user.token, function (error, response, body) {
                    // Book a schedule
                    req.flash('message', 'Congratulation! You just booked a schedule.');
                    res.redirect('/schedule-list');
                });

                return;
            }

            res.render('booking-form', {page: page, user: user, schedule: data, convertDateToString: convertServerDateToString});
        });
    },
}