var request = require('request');
const server = process.env.API_URL;
let fixedHeaders = {
    'json': true,
    'Content-Type': 'application/json; charset=utf-8',
};

module.exports = function (path, method, body = {}, callBack, newHeaders = {}) {
    const url = server + path;
    let headers = Object.assign(fixedHeaders, newHeaders);
    const options = {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    };

    try {
        request(url, options, callBack);
    }
    catch (e) {
        console.log(`[request Handler]`, e);
    }
};