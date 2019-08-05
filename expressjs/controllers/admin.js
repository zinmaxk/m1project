const api = require('../api');
const processJsonData = require('../helper/utils').processJsonData;

module.exports = {
    adminZone: (req, res) => {
        const page = {
            pageTitle: "ADMIN ZONE",
            breadCrumbTitle: "Admin zone"
        }
        res.render('admin/admin-zone', {"page": page});
    },
    adminReport: (req, res) => {
        const page = {
            pageTitle: "admin report",
            breadCrumbTitle: "admin report"
        }
        res.render('admin/admin-report', {"page": page});
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
        }
        res.render('admin/contract-creation', {"page": page});
    },
    contractDetail: (req, res) => {
        // TODO: need to be authorized
        api.getContractDetail(req.params, function (error, response, body){
            let data = processJsonData(body);
            const page = {
                pageTitle: "Contract Detail",
                breadCrumbTitle: "Contract Detail"
            };
            res.render('admin/contract-detail', {page: page, data: data});
        });
    },
    contractList: (req, res) => {
        // TODO: need to be authorized
        api.getContractList({}, function (error, response, body) {
            let contracts = processJsonData(body);
            const page = {
                pageTitle: "Contract List",
                breadCrumbTitle: "Contract List"
            };
            res.render('admin/contract-list', {page: page, contracts: contracts});
        });
    }
}