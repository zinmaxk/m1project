//
//
module.exports = {
    adminCenter: (req, res) => {
        const page = {
            pageTitle: "Admin CENTER",
            breadCrumbTitle: "Admin center"
        }
        res.render('admin/admin-center', { "page": page });
    },
    adminMembership: (req, res) => {
        const page = {
            pageTitle: "admin membership",
            breadCrumbTitle: "admin membership"
        }
        res.render('admin/admin-membership', { "page": page });
    },
    adminReport: (req, res) => {
        const page = {
            pageTitle: "admin report",
            breadCrumbTitle: "admin report"
        }
        res.render('admin/admin-report', { "page": page });
    },
    adminContract: (req, res) => {
        const page = {
            pageTitle: "admin contract",
            breadCrumbTitle: "admin contract"
        }
        res.render('admin/admin-contract', { "page": page });
    },
    contractCreation: (req, res) => {
        const page = {
            pageTitle: "Contract Creation",
            breadCrumbTitle: "Contract Creation"
        }
        res.render('admin/contract-creation', { "page": page });
    },
    contractDetail: (req, res) => {
        const page = {
            pageTitle: "Contract Detail",
            breadCrumbTitle: "Contract Detail"
        }
        res.render('admin/contract-detail', { "page": page });
    },
    contractList: (req, res) => {
        const page = {
            pageTitle: "Contract List",
            breadCrumbTitle: "Contract List"
        }
        res.render('admin/contract-list', { "page": page });
    }
}