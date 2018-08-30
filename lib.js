let gv = {}

function addEntity(key, val) {
    gv[key] = val
}

function hasKey(key) {
    return gv.hasOwnProperty(key)
}

function getEntity(key) {
    if (hasKey(key)) {
        return gv[key]
    } else {
        throw new Error('don\'t have such key for gv')
    }
}

function deleteEntity(key) {
    delete gv[key]
}

function push(key, item) {
    handlerWrongArg4Array(key)
    return gv[key].push(item)

}

function pop(key) {
    handlerWrongArg4Array(key)
    return gv[key].pop()
}

function del(key, idx) {
    handlerWrongArg4Array(key)
    if (typeof idx !== 'number') {
        throw new TypeError('argument idx expect number type')
    }
    gv[key].splice(idx < 0 ? (gv[key].length + idx) : idx, 1)
}

function map(key, func) {
    handlerWrongArg4Array(key)
    if (typeof func !== 'function') {
        throw new TypeError('expect func is fnction type!')
    }
    gv[key] = gv[key].map(func)
    return gv[key]
}

function entitySize(key) {
    handlerWrongArg4Array(key)
    return gv[key].length
}

function toEmptyList(key) {
    handlerWrongArg4Array(key)
    addEntity(key, [])
}

function getKeys() {
    return Object.keys(gv)
}

function size() {
    return Object.keys(gv).length
}

function clear() {
    gv = {}
}

function handlerWrongArg4Array(key) {
    if (!Array.isArray(gv[key])) {
        throw new TypeError('wrong arg[key], expect argument [key] for gv get an Array')
    }
}

module.exports = {
    clear,
    size,
    getKeys,
    toEmptyList,
    entitySize,
    map,
    del,
    pop,
    push,
    deleteEntity,
    getEntity,
    hasKey,
    addEntity,
}
