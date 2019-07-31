const callapi = require('./helper/callApi');
const GET = 'get';
const POST = 'post';

module.exports = {
    getGetInfo: (params = {}, callback) => {
        callapi('/api/v1/employees', GET, params, callback);
    },
    createEmployee: (params = {}, callback) => {
        callapi('/api/v1/create', POST, params, callback);
    }
};