const { expect } = require('chai')

const gv = require('../lib')

// before('clear gv', function() {
//     gv.clear()
// })

require('./before')

describe('check gv status', function() {
    it('# has 2 key', function() {
        expect(gv.hasKey('arr')).to.true
        expect(gv.hasKey('obj')).to.true
        expect(gv.hasKey('testArr')).to.false
    })

    it('# get keys', function() {
        const keys = gv.getKeys()
        expect(keys).to.be.an('array')
        expect(keys).to.eql(['arr', 'obj'])
    })

    it('# get entity', function() {
        const entity = gv.getEntity('arr')
        expect(entity).to.eql([1, 2, 3])
    })
})

describe('entity add, delete', function() {
    it('# add entity', function() {
        gv.addEntity('name', 'zhangsan')
        expect(gv.hasKey('name')).to.be.true
        expect(gv.getEntity('name')).to.equal('zhangsan')
    })

    it('# delete entity', function() {
        gv.deleteEntity('name')
        expect(gv.hasKey('name')).to.be.false
    })
})

describe('entity item', function() {
    before('add testArr', function() {
        gv.addEntity('testArr', [1, 1, 2, 3, 5])
    })

    it('# item push', function() {
        gv.push('testArr', 8)
        expect(gv.getEntity('testArr')).to.include(8)
    })

    it('# item pop', function() {
        gv.pop('testArr')
        expect(gv.getEntity('testArr')).to.eql([1, 1, 2, 3, 5])
    })

    it('# item map', function() {
        gv.map('testArr', function(val) {
            return val * val
        })
        const arr = gv.getEntity('testArr')
        expect(arr).to.lengthOf(5)
        expect(arr).to.include(25)
    })

    it('# item del', function() {
        gv.del('testArr', -1)
        expect(gv.getEntity('testArr')).to.not.include(25)
    })

    it('# item size', function() {
        expect(gv.entitySize('testArr')).to.equal(4)
    })

    it('# item empty', function() {
        gv.toEmptyList('testArr')
        expect(gv.getEntity('testArr')).to.eql([])
    })

    after('delete testArr', function() {
        gv.deleteEntity('testArr')
    })
})

describe('other test', function() {
    it('# gv size', function() {
        const size = gv.size()
        expect(size).to.equal(2)
    })
})
