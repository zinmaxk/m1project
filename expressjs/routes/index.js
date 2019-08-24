//
//
const routesAuth = require('./auth');
const routesAdmin = require('./admin');
const routesOwner = require('./owner');
const routesUser = require('./player');
const controller = require('../controllers/index')
const requiresLogin = require('../helper/middlewares').requiresLogin;
const loggedUserData = require('../helper/middlewares').loggedUserData;

const api = require('../api');

module.exports = (router) => {
    //users(router);
    router.route('/').get(loggedUserData, function (req, res, next) {
        // NEW CODE
        res.render('index');
        next();
    });
    router.route('/login').get(function (req, res) {
        if (req.session.user) {
            return res.redirect('/');
        }
        // NEW CODE
        const page = {
            pageTitle: "LOGIN FORM",
            breadCrumbTitle: "Login"
        }
        res.render('login', {"page": page, message: req.flash('message')});
    });

    router.route('/login').post(function (req, res) {
        // NEW CODE
        const page = {
            pageTitle: "LOGIN FORM",
            breadCrumbTitle: "Login"
        }
        res.render('login', {"page": page});
    });

    router.route('/about-us').get(loggedUserData, function (req, res) {
        // NEW CODE
        const page = {
            pageTitle: "ABOUT EVENT",
            breadCrumbTitle: "About"
        }
        res.render('about-us', {"page": page});
    });

    router.route('/gallery').get(loggedUserData, function (req, res) {
        // NEW CODE
        const page = {
            pageTitle: "SPORT CENTER GALLERY",
            breadCrumbTitle: "Gallery"
        }
        res.render('gallery', {"page": page});
    });

    router.route('/blog').get(loggedUserData, function (req, res) {
        // NEW CODE
        const page = {
            pageTitle: "BLOG | NEWS",
            breadCrumbTitle: "Blog News"
        }
        res.render('blog', {"page": page});
    });

    router.route('/membership').get(loggedUserData, controller.membership);

    router.route('/404error').get(function (req, res) {
        // NEW CODE
        const page = {
            pageTitle: "404 Error Issue",
            breadCrumbTitle: "404 Error Page"
        }
        res.render('404error', {"page": page});
    });

    router.route('/500error').get(function (req, res) {
        // NEW CODE
        const page = {
            pageTitle: "500 Internal Error",
            breadCrumbTitle: "500 Internal Error"
        }
        res.render('500error', {"page": page});
    });

    router.route('/requestauthor').get(function (req, res) {
        // NEW CODE
        const page = {
            pageTitle: "Authorization",
            breadCrumbTitle: "Authorization required"
        }
        res.render('requestauthor', {"page": page});
    });

    router.route('/contact').get(loggedUserData, function (req, res) {
        // NEW CODE
        const page = {
            pageTitle: "CONTACT US",
            breadCrumbTitle: "Contact Us"
        }
        res.render('contact', {"page": page});
    });
    router.route('/successfulnoti').get(loggedUserData, function (req, res) {
        // NEW CODE
        const page = {
            pageTitle: "CONGRATULATION",
            breadCrumbTitle: "Successful Page"
        }
        res.render('successfulnoti', {"page": page});
    });
    router.route('/schedule-list').get(loggedUserData, controller.getAllSchedule);
    router.route('/class-info').get(loggedUserData, function (req, res) {
        // NEW CODE
        const page = {
            pageTitle: "CLASS INFORMATION",
            breadCrumbTitle: "Class info"
        }
        res.render('class-info', {"page": page});
    });

    router.route('/changepassword').get(function (req, res) {
        // NEW CODE
        const page = {
            pageTitle: "Change Password",
            breadCrumbTitle: "Change Password"
        }
        res.render('changepassword', {"page": page});
    });

    router.route('/booking-form/:id').get(requiresLogin, controller.bookASchedule);
    router.route('/booking-form/:id').post(requiresLogin, controller.bookASchedule);

    router.route('/test-call-api').get(function (req, res) {
        // api.getGetInfo({}, function (error, response, body) {
        //     const page = {
        //         pageTitle: "Test API",
        //         breadCrumbTitle: "Test API"
        //     }
        //     if (typeof body === 'string') { //expecting data to be json object
        //         body = JSON.parse(body);
        //     }
        //     res.render('test', {"page": page, "data": body });
        // })
        api.createEmployee({"name": "Kiet", "salary": "123", "age": "23"}, function (error, response, body) {
            const page = {
                pageTitle: "Test API Create Employee",
                breadCrumbTitle: "Test API"
            };
            console.log(error);
            // if (typeof body === 'string') { //expecting data to be json object
            //     body = JSON.parse(body);
            // }
            res.render('test', {"page": page, "data": body});
        })
    });

    routesAuth(router);
    routesUser(router);
    routesAdmin(router);
    routesOwner(router);
    return router;
};