const request = require('request');
const api = require('../api');

const connUri = process.env.MONGO_LOCAL_CONN_URL;
const apiUrl = process.env.API_URL;
const processJsonData = require('../helper/utils').processJsonData;

module.exports = {
    getAllSchedule: (req, res) => {
        const page = {
            pageTitle: "Schedule list",
            breadCrumbTitle: "Schedule list"
        };

        api.getSchedules({}, function (error, response, body) {
            let scheduleList = processJsonData(body);
            res.render('schedule-list', {page: page, scheduleList: scheduleList});
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
}