const callapi = require('./helper/callApi');
const GET = 'get';
const POST = 'post';

module.exports = {
    // Demo api
    getGetInfo: (params = {}, callback) => {
        callapi('/api/v1/employees', GET, params, callback);
    },
    createEmployee: (params = {}, callback) => {
        callapi('/api/v1/create', POST, params, callback);
    },
    // Real API
    getMemberships: (params = {}, callback) => {
        callapi('/api/views/memberships', GET, params, callback);
    },

    getCenters: (params = {}, callback) => {
        callapi('/api/views/centers', GET, params, callback);
    },

    getCenterDetail: (params = {}, callback) => {
        callapi('/api/center/' + params.id, GET, params, callback);
    },

    getYards: (params = {}, callback) => {
        callapi('/api/views/yards', GET, params, callback);
    },

    getYardDetail: (params = {}, callback) => {
        callapi('/api/yard/' + params.id, GET, params, callback);
    },
};