//
//
const api = require('../api');
const processJsonData = require('../helper/utils').processJsonData;

module.exports = {
    ownerCenter: (req, res) => {
        // NEW CODE
        const page = {
            pageTitle: "OWNER CENTER",
            breadCrumbTitle: "Owner center"
        }
        res.render('owner/owner-center', {"page": page});
    },
    ownerBookingCenter: (req, res) => {
        const page = {
            pageTitle: "OWNER BOOKING CENTER",
            breadCrumbTitle: "Owner booking center"
        }
        res.render('owner/owner-booking-center', {"page": page});
    },
    ownerCenterCreate: (req, res) => {
        const page = {
            pageTitle: "OWNER CENTER CREATION",
            breadCrumbTitle: "Owner Center Creation"
        }
        res.render('owner/owner-centercreation', {"page": page});
    },
    ownerYardCreate: (req, res) => {
        const page = {
            pageTitle: "OWNER YARD CREATION",
            breadCrumbTitle: "Owner Yard Creation"
        }
        res.render('owner/owner-yardcreation', {"page": page});
    },
    ownerMember: (req, res) => {
        const page = {
            pageTitle: "OWNER member",
            breadCrumbTitle: "Owner member"
        }
        res.render('owner/owner-member', {"page": page});
    },
    ownerReport: (req, res) => {
        const page = {
            pageTitle: "OWNER report",
            breadCrumbTitle: "Owner report"
        }
        res.render('owner/owner-report', {"page": page});
    },
    ownerCenterList: (req, res) => {
        // TODO: need to authorized
        api.getCenter({}, function (error, response, body) {
            centers = processJsonData(body);
            const page = {
                pageTitle: "OWNER Center List",
                breadCrumbTitle: "Center List"
            };
            res.render('owner/owner-centerlist', {page: page, centers: centers});
        });
    },
    ownerCenterDetail: (req, res) => {
        const page = {
            pageTitle: "OWNER Center Detail",
            breadCrumbTitle: "Center Detail"
        }
        res.render('owner/owner-centerdetail', {"page": page});
    },
    ownerYardList: (req, res) => {
        const page = {
            pageTitle: "OWNER Yard List",
            breadCrumbTitle: "Yard List"
        }
        res.render('owner/owner-yardlist', {"page": page});
    },
    ownerYardDetail: (req, res) => {
        const page = {
            pageTitle: "OWNER Yard Detail",
            breadCrumbTitle: "Yard Detail"
        }
        res.render('owner/owner-yarddetail', {"page": page});
    }

}
