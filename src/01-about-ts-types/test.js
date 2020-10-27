"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var expect = chai.expect;
// The line below is just here to avoid TS error at compilation
var _ = null;
//
describe('about ts types', function () {
    it('1-should compile to plain javascript', function () {
        var boolean = true;
        var integer = 6;
        var float = Math.PI;
        var foo = "bar";
        expect(boolean).to.be.true;
        expect(integer).to.equal(6);
        expect(float).to.equal(Math.PI);
        expect(foo).to.equal('bar');
    });
    it('2-should type arrays', function () {
        var list = [1, 2]; // _
        expect(list.length).to.equal(2);
    });
    it('3-should type tuples', function () {
        var tupple = [42, 'foo']; // _
        expect(tupple[0]).to.equal(42);
        expect(tupple[1]).to.equal('foo');
    });
    it('4-should type enums', function () {
        var myAwesomeEnum;
        (function (myAwesomeEnum) {
            myAwesomeEnum[myAwesomeEnum["ACTIVE"] = 0] = "ACTIVE";
            myAwesomeEnum[myAwesomeEnum[1] = 1] = 1;
            myAwesomeEnum[myAwesomeEnum["INACTIVE"] = 2] = "INACTIVE";
        })(myAwesomeEnum || (myAwesomeEnum = {}));
        ;
        expect(myAwesomeEnum.ACTIVE).to.equal(0);
        expect(myAwesomeEnum[2]).to.equal('INACTIVE');
    });
    it('5-should type null and undefined', function () {
        var nullVar = null; // _
        var undefinedVar = undefined;
        expect(nullVar).to.be.null;
        expect(undefinedVar).to.be.undefined;
    });
    it('6-should work in functions arguments too', function () {
        function sayHello(name) {
            return 'Hello '.concat(name);
        }
        expect(sayHello('TypeScript')).to.equal('Hello TypeScript'); // replace the _
    });
    it('7-should infer the type', function () {
        function add(a, b) {
            return a + b;
        }
        expect(add(17, '25')).to.equal('1725'); // replace the _
    });
});
//# sourceMappingURL=test.js.map