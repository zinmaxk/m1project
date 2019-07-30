const controller = require('../controllers/owner');

module.exports = (router) => {
    router.route('/owner/owner-center')
        .get(controller.ownerCenter);
    router.route('/owner/owner-booking-center')
        .get(controller.ownerBookingCenter);
    router.route('/owner/owner-member')
        .get(controller.ownerMember);
    router.route('/owner/owner-report')
        .get(controller.ownerReport);
};