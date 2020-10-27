"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var expect = chai.expect;
describe('about non nullable types', function () {
    function contains(searchString, collection) {
        return !!collection && collection.indexOf(searchString) > -1;
        //throw new Error('not implemented');
    }
    it('1-should work with undefined or null searchString', function () {
        expect(contains(undefined, [])).to.be.false;
        expect(contains(null, [])).to.be.false;
    });
    it('2-should work with undefined or null collection', function () {
        expect(contains('', undefined)).to.be.false;
        expect(contains('', null)).to.be.false;
    });
    it('3-should work with undefined or null collection items', function () {
        expect(contains('foo', [undefined, 'foo'])).to.be.true;
        expect(contains('foo', [null, 'foo'])).to.be.true;
    });
});
//# sourceMappingURL=test.js.map