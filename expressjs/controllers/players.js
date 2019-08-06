const api = require('../api');
const processJsonData = require('../helper/utils').processJsonData;
const convertServerDateToString = require('../helper/utils').convertServerDateToString;

module.exports = {
    playerBooking: (req, res) => {
        const page = {
            pageTitle: "User booking",
            breadCrumbTitle: "User booking"
        }
        res.render('player/player-booking', { "page": page });
    },
    playerInfo: (req, res) => {
        let params = {id: 14}; // Hard code for testing
        const page = {
            pageTitle: "User Info",
            breadCrumbTitle: "User info"
        };

        api.getUserInfo(params, function (error, response, body) {
            let data = processJsonData(body);
            res.render('player/player-info', {page: page, data: data, convertDateToString: convertServerDateToString});
        });
    }
}