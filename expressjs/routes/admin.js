//
//
const controller = require('../controllers/admin');

module.exports = (router) => {
    router.route('/admin/admin-center').get(controller.adminCenter);
    router.route('/admin/admin-membership').get(controller.adminMembership);
    router.route('/admin/admin-report').get(controller.adminReport);
    router.route('/admin/admin-contract').get(controller.adminContract);
    router.route('/admin/contract-creation').get(controller.contractCreation);
};