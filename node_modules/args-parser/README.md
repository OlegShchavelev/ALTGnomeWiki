# args-parser

Straight-forward node.js arguments parser.

```bash
$ node ./script.js careful -dangerous --tomatoes=3 --tonight --key=ek==

{
  "careful": true,
  "dangerous": true,
  "tomatoes": 3,
  "tonight": true,
  "key": "ek=="
}
```

## How to use it?

```bash
$ npm install args-parser
```

Simply call the module passing it an `arguments` array such as `process.argv`:

```javascript
const args = require('args-parser')(process.argv);
console.info(args);
```

The returned value is an `Object` having a key for each given argument and a value if it's found an `=` sign (`true` otherwise).

Consider this command:

```bash
$ node ./script.js careful -dangerous --tomatoes=3 --tonight --key=ek==
```

Will return:

```json
{
  "careful": true,
  "dangerous": true,
  "tomatoes": 3,
  "tonight": true,
  "key": "ek=="
}
```

So then you can easily check what you need:

```javascript
if (args.careful) {
  // Do something
}
```
