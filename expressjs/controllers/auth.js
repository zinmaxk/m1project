const api = require('../api');
const processJsonData = require('../helper/utils').processJsonData;

module.exports = {
    login: (req, res) => {
        let params = {
            email: req.body.email,
            password: req.body.password
        };
        api.login(params, function (error, response, body) {
            if (error) throw new Error(error);

            let data = processJsonData(body);

            if (data.message == 'Login successful') {
                req.session.user = data.data;
                return res.redirect('/');
            }

            req.flash('message', data.message);
            return res.redirect('/login');
        });
    },

    logout: (req, res) => {
        if (req.session) {
            // delete session object
            req.session.destroy(function(err) {
                if(err) {
                    return next(err);
                } else {
                    return res.redirect('/');
                }
            });
        }
    },
}