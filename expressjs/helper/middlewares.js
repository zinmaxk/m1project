module.exports = {
    requiresLogin: (req, res, next) => {
        if (req.session && req.session.token) {
            return next();
        } else {
            res.send('You must be logged in to view this page.');
            // let err = new Error('You must be logged in to view this page.');
            // err.status = 401;
            // return next(err);
        }
    }
}