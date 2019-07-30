//
//
const routesAdmin = require('./admin');
const routesOwner = require('./owner');
const routesUser = require('./user');
const controller = require('../controllers/index')

module.exports = (router) => {
    //users(router);
    router.route('/').get(function(req, res, next) {
        // NEW CODE
        res.render('index');
        next();
    });
    router.route('/login').get(function(req, res) {
        // NEW CODE
        const page = {
            pageTitle: "LOGIN FORM",
            breadCrumbTitle: "Login"
        }
        res.render('login', { "page": page });
    });

    router.route('/login').post(function(req, res) {
        // NEW CODE
        const page = {
            pageTitle: "LOGIN FORM",
            breadCrumbTitle: "Login"
        }
        res.render('login', { "page": page });
    });

    router.route('/about-us').get(function(req, res) {
        // NEW CODE
        const page = {
            pageTitle: "ABOUT EVENT",
            breadCrumbTitle: "About"
        }
        res.render('about-us', { "page": page });
    });

    router.route('/gallery').get(function(req, res) {
        // NEW CODE
        const page = {
            pageTitle: "SPORT CENTER GALLERY",
            breadCrumbTitle: "Gallery"
        }
        res.render('gallery', { "page": page });
    });

    router.route('/blog').get(function(req, res) {
        // NEW CODE
        const page = {
            pageTitle: "BLOG | NEWS",
            breadCrumbTitle: "Blog News"
        }
        res.render('blog', { "page": page });
    });

    router.route('/pricing').get(function(req, res) {
        // NEW CODE
        const page = {
            pageTitle: "OUR PRICE",
            breadCrumbTitle: "Pricing"
        }
        res.render('pricing', { "page": page });
    });

    router.route('/404error').get(function(req, res) {
        // NEW CODE
        const page = {
            pageTitle: "404 Error Issue",
            breadCrumbTitle: "404 Error Page"
        }
        res.render('404error', { "page": page });
    });

    router.route('/contact').get(function(req, res) {
        // NEW CODE
        const page = {
            pageTitle: "CONTACT US",
            breadCrumbTitle: "Contact Us"
        }
        res.render('contact', { "page": page });
    });
    router.route('/schedule-list').get(controller.getAllSchedule);
    router.route('/class-info').get(function(req, res) {
        // NEW CODE
        const page = {
            pageTitle: "CLASS INFORMATION",
            breadCrumbTitle: "Class info"
        }
        res.render('class-info', { "page": page });
    });

    router.route('/register').get(function(req, res) {
        // NEW CODE
        const page = {
            pageTitle: "Register",
            breadCrumbTitle: "Register"
        }
        res.render('register', { "page": page });
    });

    routesUser(router);
    routesAdmin(router);
    routesOwner(router);
    return router;
};