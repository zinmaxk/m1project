//
//
const api = require('../api');
const processJsonData = require('../helper/utils').processJsonData;
const convertServerDateToString = require('../helper/utils').convertServerDateToString;

module.exports = {
    ownerZone: (req, res) => {
        let params = {id: req.session.user.userId};
        const page = {
            pageTitle: "OWNER CENTER",
            breadCrumbTitle: "Owner Zone"
        };
        api.getUserInfo(params, req.session.user.token, function (error, response, body) {
            let data = processJsonData(body);
            res.render('owner/owner-zone', {page: page, data: data, convertDateToString: convertServerDateToString});
        });
    },
    ownerBookingCenter: (req, res) => {
        const page = {
            pageTitle: "OWNER BOOKING CENTER",
            breadCrumbTitle: "Owner booking center"
        };
        res.render('owner/owner-booking-center', {"page": page});
    },
    ownerBookingform: (req, res) => {
        const page = {
            pageTitle: "OWNER BOOKING FORM",
            breadCrumbTitle: "Owner booking form"
        };
        res.render('owner/owner-booking-form', {"page": page});
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
                ownerId: req.session.user.userId,
                category: req.session.user.category,
                status: 1,
                name: req.body.centerName,
                website: req.body.website,
                phone: req.body.phone,
                address: req.body.address,
                city: req.body.city,
                country: req.body.country,
                openTime: req.body.openTime,
                closeTime: req.body.closeTime
            };

            api.createCenter(data, req.session.user.token, function (error, response, body) {
                req.flash('message', 'Your center has created successful!');
                // res.render('owner/owner-centercreation', {page: page, data: data, message: ''});
                res.redirect('/owner/owner-centerlist');
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
    ownerSReport: (req, res) => {
        const page = {
            pageTitle: "OWNER Sample Report",
            breadCrumbTitle: "Owner Sample Report"
        }
        res.render('owner/samplereport', {"page": page});
    },
    ownerCenterList: (req, res) => {
        api.getCenters({}, req.session.user.token, function (error, response, body) {
            let centers = processJsonData(body);
            const page = {
                pageTitle: "OWNER Center List",
                breadCrumbTitle: "Center List"
            };
            res.render('owner/owner-centerlist', {page: page, centers: centers, message: req.flash('message')});
        });
    },
    ownerCenterDetail: (req, res) => {
        api.getCenterDetail(req.params, req.session.user.token, function (error, response, body) {
            let data = processJsonData(body);


            const page = {
                pageTitle: "OWNER Center Detail",
                breadCrumbTitle: "Center Detail"
            };
            res.render('owner/owner-centerdetail', {"page": page, data: data});
        });
    },
    ownerYardList: (req, res) => {
        api.getYards({}, req.session.user.token, function (error, response, body) {
            let yards = processJsonData(body);
            const page = {
                pageTitle: "OWNER Yard List",
                breadCrumbTitle: "Yard List"
            };
            res.render('owner/owner-yardlist', {page: page, yards: yards});
        });
    },
    ownerYardDetail: (req, res) => {
        api.getYardDetail(req.params, req.session.user.token, function (error, response, body) {
            let data = processJsonData(body);
            const page = {
                pageTitle: "OWNER Yard Detail",
                breadCrumbTitle: "Yard Detail"
            };
            res.render('owner/owner-yarddetail', {page: page, data: data});
        });
    }

}
