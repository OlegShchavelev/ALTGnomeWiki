'use strict';

const post = require('./post');
const {
    errors,
    ERROR_UNKNOWN_WORD,
    ERROR_REPEATED_WORD,
    ERROR_CAPITALIZATION,
    ERROR_TOO_MANY_ERRORS,
} = require('./errors');

const YASPELLER_HOST = 'speller.yandex.net';
const YASPELLER_PATH = '/services/spellservice.json/';

const DEFAULT_FORMAT = 'plain';
const DEFAULT_LANG = 'en,ru';
const DEFAULT_REQUEST_LIMIT = 2;
const DEFAULT_TIMEOUT = 500;

/**
 * Check text for typos.
 *
 * @param {string} text
 * @param {Function} callback
 * @param {Settings} settings
 * @see {@link https://tech.yandex.ru/speller/doc/dg/reference/checkText-docpage/}
 */
function checkText(text, callback, settings) {
    const form = prepareSettings(settings);
    form.text = text;

    post({
        host: YASPELLER_HOST,
        path: YASPELLER_PATH + 'checkText',
        form: form,
    }, function(error, response, body) {
        if (error) {
            callback(error, null);
        } else {
            if (response.statusCode === 200) {
                callback(null, body);
            } else {
                callback(
                    Error('Yandex.Speller API returns status code is ' +
              response.statusCode, null)
                );
            }
        }
    });
}

/**
 * Check text for typos.
 *
 * @param {string[]} texts
 * @param {Function} callback
 * @param {Settings} settings
 * @see {@link https://tech.yandex.ru/speller/doc/dg/reference/checkTexts-docpage/}
 */
function checkTexts(texts, callback, settings) {
    const form = prepareSettings(settings);
    form.text = texts;

    post({
        host: YASPELLER_HOST,
        path: YASPELLER_PATH + 'checkTexts',
        form: form,
    }, function(error, response, body) {
        if (error) {
            callback(error, null);
        } else {
            if (response.statusCode === 200) {
                callback(null, body);
            } else {
                callback(
                    Error('Yandex.Speller API returns status code is ' +
              response.statusCode, null)
                );
            }
        }
    });
}

function prepareOptions(options) {
    let result = 0;
    // https://yandex.ru/dev/speller/doc/ru/reference/speller-options
    const standartOptions = {
        IGNORE_DIGITS: 2,
        IGNORE_URLS: 4,
        FIND_REPEAT_WORDS: 8,
        IGNORE_CAPITALIZATION: 512,
    };

    Object.keys(options || {}).forEach(function(key) {
        const upperCaseKey = key.replace(/([A-Z])/g, '_$1').toUpperCase();
        if (standartOptions[upperCaseKey] && options[key]) {
            result |= standartOptions[upperCaseKey];
        }
    });

    return result;
}

function prepareSettings(settings) {
    settings = settings || {};

    return {
        format: settings.format || DEFAULT_FORMAT,
        lang: settings.lang || DEFAULT_LANG,
        options: prepareOptions(settings.options),
        requestLimit: settings.requestLimit || DEFAULT_REQUEST_LIMIT,
        timeout: settings.timeout || DEFAULT_TIMEOUT,
    };
}

/**
 * @typedef {Object} Settings
 * @param {string} [format] Text format: plain or html.
 * @param {string|Array} [lang] Language: en, ru or uk.
 * @param {number} [requestLimit] Request repeat count in case internet connection issues.
 * @param {number} [timeout] Timeout between request repeats in milliseconds.
 * @param {Object} [options]
 * @param {boolean} [options.ignoreDigits] Ignore words with numbers, such as "avp17h4534".
 * @param {boolean} [options.ignoreUrls] Ignore Internet addresses, email addresses and filenames.
 * @param {boolean} [options.findRepeatWords] Highlight repetitions of words, consecutive. For example, "I flew to to to Cyprus".
 * @param {boolean} [options.ignoreCapitalization] Ignore the incorrect use of UPPERCASE / lowercase letters, for example, in the word "moscow".
 */

module.exports = {
    checkText,
    checkTexts,

    defaultFormat: DEFAULT_FORMAT,
    defaultLang: DEFAULT_LANG,

    errors,
    errorCodes: errors, // Deprecated

    ERROR_UNKNOWN_WORD,
    ERROR_REPEATED_WORD,
    ERROR_CAPITALIZATION,
    ERROR_TOO_MANY_ERRORS,

    supportedFormats: ['plain', 'html']
};
