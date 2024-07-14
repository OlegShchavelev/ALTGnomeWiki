/**
 *  @see {@link https://tech.yandex.ru/speller/doc/dg/reference/error-codes-docpage/}
 */

const ERROR_UNKNOWN_WORD = 1;
const ERROR_REPEATED_WORD = 2;
const ERROR_CAPITALIZATION = 3;
const ERROR_TOO_MANY_ERRORS = 4;

module.exports = {
    ERROR_UNKNOWN_WORD,
    ERROR_REPEATED_WORD,
    ERROR_CAPITALIZATION,
    ERROR_TOO_MANY_ERRORS,
    errors: [
        {
            code: ERROR_UNKNOWN_WORD,
            name: 'ERROR_UNKNOWN_WORD',
            text: 'Typos',
        },
        {
            code: ERROR_REPEATED_WORD,
            name: 'ERROR_REPEATED_WORD',
            text: 'Repeated words',
        },
        {
            code: ERROR_CAPITALIZATION,
            name: 'ERROR_CAPITALIZATION',
            text: 'Capitalization',
        },
        {
            code: ERROR_TOO_MANY_ERRORS,
            name: 'ERROR_TOO_MANY_ERRORS',
            text: 'Too many errors',
        }
    ]
};
