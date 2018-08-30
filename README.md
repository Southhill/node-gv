## overview
node global val, avoid pullute global object

## usage
```js
const gv = require('./lib')
```
object `gv` have below functions:** clear, size, getKeys, toEmptyList, entitySize, map, del, pop, push, deleteEntity, getEntity, hasKey, addEntity**

##occur problem
1. why don't have function by commonjs way?, have below code:
```js
exports.add = function(a, b) {
    return a + b
}
add(2, 3) //-> ReferenceError: add is not defined
```
