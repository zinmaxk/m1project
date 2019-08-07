//
//
const controller = require('../controllers/admin');

module.exports = (router) => {
    router.route('/admin/admin-zone').get(controller.adminZone);
    router.route('/admin/admin-report').get(controller.adminReport);
    router.route('/admin/samplereport').get(controller.adminSReport);
    router.route('/admin/admin-contract').get(controller.adminContract);
    router.route('/admin/contract-creation').get(controller.contractCreation);
    router.route('/admin/contract-detail/:id').get(controller.contractDetail);
    router.route('/admin/contract-list').get(controller.contractList);

};