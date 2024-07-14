'use strict';

const querystring = require('querystring');
const https = require('https');

const ETIMEDOUT = 'Request timed out.';

function post(params, callback) {
    const form = querystring.stringify(params.form);
    const options = {
        host: params.host,
        path: params.path,
        port: 443,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(form)
        }
    };

    let req = https.request(options, function(res) {
        let textBuffer = '';

        res.setEncoding('utf8');

        res.on('data', function(chunk) {
            textBuffer += chunk;
        });

        res.on('end', function() {
            let json;
            try {
                json = JSON.parse(textBuffer);
            } catch (e) {
                callback(
                    'Yandex.Speller API:\n-------------------\n' +
            'Status code: ' + res.statusCode + '\n' +
            'Response: ' + textBuffer + '\n' +
            'JSON.parse(Response): ' + e + '\n'
                );

                return;
            }

            callback(null, res, json);
        });
    });

    req.on('error', function(e) {
        callback(e);
    });

    req.on('timeout', function() {
        req.destroy(Error(ETIMEDOUT));
    });

    req.write(form);
    req.end();
}

function postRetryingDecorator(params, callback) {
    let tryNumber = 1;
    let callbackOrigin = callback;
    let paramsOrigin = params;
    let requestLimit = params.requestLimit || 2;
    let timeout = params.timeout || 500;

    let callbackMock = function(err) {
        if (err && err.message == ETIMEDOUT && tryNumber <= requestLimit) {
            tryNumber++;
            setTimeout(function() { post(paramsOrigin, callbackMock); }, timeout);
            return;
        }

        callbackOrigin.apply(this, arguments);
    };

    post(params, callbackMock);
}

module.exports = postRetryingDecorator;
