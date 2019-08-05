//
//
const api = require('../api');
const processJsonData = require('../helper/utils').processJsonData;

module.exports = {
    ownerZone: (req, res) => {
        // NEW CODE
        const page = {
            pageTitle: "OWNER CENTER",
            breadCrumbTitle: "Owner Zone"
        }
        res.render('owner/owner-zone', {"page": page});
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
        // TODO: need to be authorized
        api.getCenters({}, function (error, response, body) {
            let centers = processJsonData(body);
            const page = {
                pageTitle: "OWNER Center List",
                breadCrumbTitle: "Center List"
            };
            res.render('owner/owner-centerlist', {page: page, centers: centers});
        });
    },
    ownerCenterDetail: (req, res) => {
        // TODO: need to be authorized
        api.getCenterDetail(req.params, function (error, response, body) {
            let data = processJsonData(body);


            const page = {
                pageTitle: "OWNER Center Detail",
                breadCrumbTitle: "Center Detail"
            };
            res.render('owner/owner-centerdetail', {"page": page, data: data});
        });
    },
    ownerYardList: (req, res) => {
        // TODO: need to be authorized
        api.getYards({}, function (error, response, body) {
            let yards = processJsonData(body);
            const page = {
                pageTitle: "OWNER Yard List",
                breadCrumbTitle: "Yard List"
            };
            res.render('owner/owner-yardlist', {page: page, yards: yards});
        });
    },
    ownerYardDetail: (req, res) => {
        // TODO: need to be authorized
        api.getYardDetail(req.params, function (error, response, body) {
            let data = processJsonData(body);
            const page = {
                pageTitle: "OWNER Yard Detail",
                breadCrumbTitle: "Yard Detail"
            };
            res.render('owner/owner-yarddetail', {page: page, data: data});
        });
    }

}
