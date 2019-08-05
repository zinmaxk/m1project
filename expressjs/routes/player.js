//
//
const controller = require('../controllers/players');

module.exports = (router) => {
    router.route('/player/player-booking').get(controller.playerBooking);
    router.route('/player/player-info').get(controller.playerInfo);
};
