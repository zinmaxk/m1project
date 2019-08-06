//
//
const api = require('../api');
const processJsonData = require('../helper/utils').processJsonData;
const bodyParser = require('body-parser');

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
        let data = {
            name: '',
            website: '',
            phone: '',
            address: '',
            city: '',
            country: '',
            openTime: '',
            closeTime: ''
        };

        const page = {
            pageTitle: "OWNER CENTER CREATION",
            breadCrumbTitle: "Owner Center Creation"
        };

        if (req.method == 'POST') {
            // API create
            data = {
                ownerId: 6, //TODO: hardcode as authorized user
                category: 3, //TODO: hardcode as authorized user,
                status: 1, //TODO: hardcode as authorized user,
                name: req.body.centerName,
                website: req.body.website,
                phone: req.body.phone,
                address: req.body.address,
                city: req.body.city,
                country: req.body.country,
                openTime: req.body.openTime,
                closeTime: req.body.closeTime
            };

            api.createCenter(data, function (error, response, body) {
                console.log(data, error, response, body);
                res.render('owner/owner-centercreation', {page: page, data: data, message: 'Create center has successful!'});
            });
            return;
        }
        res.render('owner/owner-centercreation', {page: page, data: data});
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
