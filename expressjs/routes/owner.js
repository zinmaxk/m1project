const controller = require('../controllers/owner');
const requiresLogin = require('../helper/middlewares').requiresLogin;

module.exports = (router) => {
    router.route('/owner/owner-zone')
        .get(requiresLogin, controller.ownerZone);
    router.route('/owner/owner-booking-center')
        .get(requiresLogin, controller.ownerBookingCenter);
    router.route('/owner/owner-member')
        .get(requiresLogin, controller.ownerMember);
    router.route('/owner/owner-report')
        .get(requiresLogin, controller.ownerReport);
    router.route('/owner/samplereport')
        .get(requiresLogin, controller.ownerSReport);
    router.route('/owner/owner-centercreation')
        .get(requiresLogin, controller.ownerCenterCreate);
    router.route('/owner/owner-centerlist')
        .get(requiresLogin, controller.ownerCenterList);
    router.route('/owner/owner-centerdetail/:id')
        .get(requiresLogin, controller.ownerCenterDetail);
    router.route('/owner/owner-yardcreation')
        .get(requiresLogin, controller.ownerYardCreate);
    router.route('/owner/owner-yardlist')
        .get(requiresLogin, controller.ownerYardList);
    router.route('/owner/owner-yarddetail/:id')
        .get(requiresLogin, controller.ownerYardDetail);
    router.route('/owner/owner-booking-form/:id')
        .get(requiresLogin, controller.ownerBookingform);
};