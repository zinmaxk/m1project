//
//
const controller = require('../controllers/players');
const validateToken = require('../helper/utils').validateToken;

module.exports = (router) => {
    router.route('/user/login').get(function (req, res) {
        res.redirect("/login");
    });
    router.route('/user/login').post(controller.userLogin);
    router.route('/user/user-register').post(controller.userRegister);
    router.route('/user/user-booking').get(validateToken, controller.userBooking);
    router.route('/user/user-info').get(validateToken, controller.userInfo);
};