const api = require('../api');
const processJsonData = require('../helper/utils').processJsonData;
const convertServerDateToString = require('../helper/utils').convertServerDateToString;

module.exports = {
    adminZone: (req, res) => {
        let params = {id: req.session.user.userId};
        const page = {
            pageTitle: "ADMIN ZONE",
            breadCrumbTitle: "Admin zone"
        };

        api.getUserInfo(params, req.session.user.token, function (error, response, body) {
            let data = processJsonData(body);
            res.render('admin/admin-zone', {page: page, data: data, convertDateToString: convertServerDateToString});
        });
    },
    adminReport: (req, res) => {
        const page = {
            pageTitle: "admin report",
            breadCrumbTitle: "admin report"
        }
        res.render('admin/admin-report', {"page": page});
    },
    adminSReport: (req, res) => {
        const page = {
            pageTitle: "Admin Sample report",
            breadCrumbTitle: "Admin Sample report"
        }
        res.render('admin/samplereport', {"page": page});
    },
    adminContract: (req, res) => {
        const page = {
            pageTitle: "admin contract",
            breadCrumbTitle: "admin contract"
        }
        res.render('admin/admin-contract', {"page": page});
    },
    contractCreation: (req, res) => {
        const page = {
            pageTitle: "Contract Creation",
            breadCrumbTitle: "Contract Creation"
        };

        if (req.method == 'POST') {
            let insertData = {
                userAccountId: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                dateOfBirth: '',
                membershipId: '',
                country: '',
                startDate: '',
                endDate: '',
            };
            return;
        }

        api.getMemberships({}, function (error, response, body) {
            let data = processJsonData(body);
            res.render('admin/contract-creation', {page: page, memberships: data});
        });
    },
    contractDetail: (req, res) => {
        // TODO: need to be authorized
        api.getContractDetail(req.params, req.session.user.token, function (error, response, body) {
            let data = processJsonData(body);
            const page = {
                pageTitle: "Contract Detail",
                breadCrumbTitle: "Contract Detail"
            };
            res.render('admin/contract-detail', {page: page, data: data, convertDateToString: convertServerDateToString});
        });
    },
    contractList: (req, res) => {
        // TODO: need to be authorized
        api.getContractList({}, req.session.user.token, function (error, response, body) {
            let contracts = processJsonData(body);
            const page = {
                pageTitle: "Contract List",
                breadCrumbTitle: "Contract List"
            };
            res.render('admin/contract-list', {page: page, contracts: contracts});
        });
    }
}