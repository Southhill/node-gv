## overview
node global val, avoid pullute global object

## usage
```js
const gv = require('./lib')
```
object `gv` have below functions:** clear, size, getKeys, toEmptyList, entitySize, map, del, pop, push, deleteEntity, getEntity, hasKey, addEntity**

## occur problem
1. why don't have function by commonJS way?, have below code:
```js
exports.add = function(a, b) {
    return a + b
}
add(2, 3) //-> ReferenceError: add is not defined
```
> wake up, i understand the origin of problem. `exports` is shorthand of `module.exports`, so `exports.add` actually is `module.exports.add`, that is prop of Object `module.exports`. however call `add` function is a prop of global object actually.
so got a error: `ReferenceError: add is not defined`. use **es6** export should no the problem. below code:

```js
export const add = function(a, b) {
    return a + b
}
add(2, 3) //-> 5

// babel complier to es5

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var add = exports.add = function add(a, b) {
    return a + b;
};
add(2, 3);
```
so we write such code that is no problem if we want don't to use grammar of **es6**:
```js
var add = exports.add = function add(a, b) {
    return a + b;
};
add(2, 3);
```
