const request = require('request');
const server = process.env.API_URL;
const APPLICATION_FORM_URLENCODED_VALUE = 'application/x-www-form-urlencoded';
const APPLICATION_JSON_VALUE = 'application/json';
const CONTENT_TYPE = 'Content-Type';
let fixedHeaders = {
    'Content-Type': APPLICATION_FORM_URLENCODED_VALUE,
};

module.exports = function (path, method, body = {}, callBack, newHeaders = {}) {
    const url = server + path;
    let data = JSON.stringify(body);
    let headers = Object.assign(fixedHeaders, newHeaders);
    const options = {
        method: method,
        url: url,
        headers: headers,
        formData: body,
    };

    if (headers[CONTENT_TYPE] == APPLICATION_JSON_VALUE) {
        delete  options.formData;
        options['body'] = JSON.stringify(body);
    }

    try {
        request(options, callBack);
    }
    catch (e) {
        console.log(`[request Handler]`, e);
    }
};