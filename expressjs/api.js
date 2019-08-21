const callapi = require('./helper/callApi');
const parseAuthorizationHeader = require('./helper/utils').parseAuthorizationHeader;
const GET = 'GET';
const POST = 'POST';

module.exports = {
    // Demo api
    getGetInfo: (params = {}, callback) => {
        callapi('/api/v1/employees', GET, params, callback);
    },
    createEmployee: (params = {}, callback) => {
        callapi('/api/v1/create', POST, params, callback);
    },

    // Real API
    login: (params = {}, callback) => {
        // callapi('/login', POST, params, callback, {'Content-Type': 'application/json', json: true});
        callapi('/login', POST, params, callback);
    },

    getMemberships: (params = {}, callback) => {
        callapi('/views/memberships', GET, params, callback);
    },

    getSchedules: (params = {}, callback) => {
        callapi('/views/schedules', GET, params, callback);
    },

    getCenters: (params = {}, token, callback) => {
        callapi('/api/center?action=query', GET, params, callback, parseAuthorizationHeader(token));
    },

    getCenterDetail: (params = {}, token, callback) => {
        callapi('/api/center/' + params.id, GET, params, callback, parseAuthorizationHeader(token));
    },

    getYards: (params = {}, token, callback) => {
        callapi('/api/views/yard?action=query', GET, params, callback, parseAuthorizationHeader(token));
    },

    getYardDetail: (params = {}, token, callback) => {
        callapi('/api/views/yard/' + params.id, GET, params, callback, parseAuthorizationHeader(token));
    },

    getContractList: (params = {}, token, callback) => {
        callapi('/api/views/contracts/', GET, params, callback, parseAuthorizationHeader(token));
    },

    getContractDetail: (params = {}, token, callback) => {
        callapi('/api/views/contract/' + params.id, GET, params, callback, parseAuthorizationHeader(token));
    },

    createCenter: (params = {}, token, callback) => {
        callapi('/api/center/', POST, params, callback, parseAuthorizationHeader(token, true));
    },

    getUserInfo: (params = {}, token, callback) => {
        callapi('/api/userAccount/' + params.id, GET, params, callback, parseAuthorizationHeader(token));
    },

    getSports: (params = {}, callback) => {
        callapi('/sports', GET, params, callback);
    },

    createYard: (params = {}, token, callback) => {
        callapi('/api/yard/', POST, params, callback, parseAuthorizationHeader(token, true));
    },
};