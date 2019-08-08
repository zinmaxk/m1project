const jwt = require('jsonwebtoken');

module.exports = {
    validateToken: (req, res, next) => {
        const authorizationHeaader = req.headers.authorization;
        let result;
        if (authorizationHeaader) {
            const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
            const options = {
                expiresIn: '2d',
                issuer: 'https://scotch.io'
            };
            try {
                // verify makes sure that the token hasn't expired and has been issued by us
                result = jwt.verify(token, process.env.JWT_SECRET, options);

                // Let's pass back the decoded token to the request object
                req.decoded = result;
                // We call next to pass execution to the subsequent middleware
                next();
            } catch (err) {
                // Throw an error just in case anything goes wrong with verification
                throw new Error(err);
            }
        } else {
            result = {
                error: `Authentication error. Token required.`,
                status: 401
            };
            res.status(401).send(result);
        }
    },
    processJsonData: (data) => {
        if (typeof data === 'string') { //expecting data to be json object
            data = JSON.parse(data);
        }

        return data;
    },
    convertServerDateToString: (data) => {
        if (!data || !Array.isArray(data))
            return '';

        let year = data[0];
        let month = data[1] < 10 ? '0' + data[1] : data[1];
        let day = data[2] < 10 ? '0' + data[2] : data[2];

        return year + '-' + month + '-' + day;
    },
    parseAuthorizationHeader: (token) => {
       return {Authorization: 'Bearer ' + token};
    },
};