# Changelog

## 6.0.0
Switch to new Yandex Speller API.
Removed unsupported API options:
- IGNORE_UPPERCASE
- IGNORE_LATIN
- NO_SUGGEST
- FLAG_LATIN
- BY_WORDS
- IGNORE_ROMAN_NUMERALS

## 5.0.0
- Drop support Node.js < 16.
- Fix timeout event.
- Update dev deps in package.json.

## 4.1.0
Add error codes for export #6.

## 4.0.0
Revert switch to new Yandex Speller API.

## 3.0.0
Switch to new Yandex Speller API.
Removed unsupported API options:
- IGNORE_UPPERCASE
- IGNORE_DIGITS
- FIND_REPEAT_WORDS
- IGNORE_LATIN
- NO_SUGGEST
- FLAG_LATIN
- BY_WORDS
- IGNORE_CAPITALIZATION
- IGNORE_ROMAN_NUMERALS

## 2.1.0
Repeating server request in case of internet connection issues #1 @Avetome

## 2.0.1
Fixed `use strict` mode.

## 2.0.0
- A support for old Node version is dropped
- Removed module “request” from deps
- Fixed codestyle (jshint → eslint)

## 1.0.0
Initial public release.
