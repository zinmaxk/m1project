//
//
const controller = require('../controllers/players');
const requiresLogin = require('../helper/middlewares').requiresLogin;

module.exports = (router) => {
    router.route('/player/player-booking').get(requiresLogin, controller.playerBooking);
    router.route('/player/player-info').get(requiresLogin, controller.playerInfo);
};
