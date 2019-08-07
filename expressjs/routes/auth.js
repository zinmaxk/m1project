//
//
const controller = require('../controllers/auth');

module.exports = (router) => {
    router.route('/auth/login').post(controller.login);
    router.route('/auth/logout').get(controller.logout);
};