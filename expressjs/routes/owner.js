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
    router.route('/owner/owner-centercreation')
        .get(controller.ownerCenterCreate);
    router.route('/owner/owner-yardcreation')
        .get(controller.ownerYardCreate);
    router.route('/owner/owner-centerlist')
        .get(controller.ownerCenterList);
    router.route('/owner/owner-centerdetail/:id')
        .get(controller.ownerCenterDetail);
    router.route('/owner/owner-yardlist')
        .get(controller.ownerYardList);
    router.route('/owner/owner-yarddetail/:id')
        .get(controller.ownerYardDetail);
};