const api = require('../api');
const processJsonData = require('../helper/utils').processJsonData;

module.exports = {
    playerBooking: (req, res) => {
        const page = {
            pageTitle: "User booking",
            breadCrumbTitle: "User booking"
        }
        res.render('player/player-booking', { "page": page });
    },
    playerInfo: (req, res) => {
        const page = {
            pageTitle: "User Info",
            breadCrumbTitle: "User info"
        }
        res.render('player/player-info', { "page": page });
    }
}