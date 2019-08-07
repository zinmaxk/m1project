//
//
const controller = require('../controllers/admin');
const requiresLogin = require('../helper/middlewares').requiresLogin;

module.exports = (router) => {
    router.route('/admin/admin-zone').get(requiresLogin, controller.adminZone);
    router.route('/admin/admin-report').get(requiresLogin, controller.adminReport);
    router.route('/admin/samplereport').get(requiresLogin, controller.adminSReport);
    router.route('/admin/admin-contract').get(requiresLogin, controller.adminContract);
    router.route('/admin/contract-creation').get(requiresLogin, controller.contractCreation);
    router.route('/admin/contract-detail/:id').get(requiresLogin, controller.contractDetail);
    router.route('/admin/contract-list').get(requiresLogin, controller.contractList);

};