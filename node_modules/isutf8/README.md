[![NPM Version](https://img.shields.io/npm/v/isutf8.svg?style=flat)](https://www.npmjs.org/package/isutf8)
[![NPM Downloads](https://img.shields.io/npm/dm/isutf8.svg?style=flat)](https://www.npmjs.org/package/isutf8)
[![Bundlephobia](https://badgen.net/bundlephobia/minzip/isutf8)](https://bundlephobia.com/result?p=isutf8)
[![install size](https://packagephobia.com/badge?p=isutf8)](https://packagephobia.com/result?p=isutf8)

isutf8
======

Quick check if a Node.js Buffer or Uint8Array is UTF-8.

## Install
`npm install isutf8`

## Usage

### CommonJS
```js
'use strict';

const isUtf8 = require('isutf8');

const buf = Buffer.from([0xd0, 0x90]);
console.log(isUtf8(buf)); // => true

// or 

const arr = new Uint8Array([0xd0, 0x90]);
console.log(isUtf8(arr)); // => true

```

### ES Modules or TypeScript
```js
import isUtf8 from 'isutf8';

const buf = Buffer.from([0xd0, 0x90]);
console.log(isUtf8(buf)); // => true

// or 

const arr = new Uint8Array([0xd0, 0x90]);
console.log(isUtf8(arr)); // => true
```

## License
[MIT License](./LICENSE)
