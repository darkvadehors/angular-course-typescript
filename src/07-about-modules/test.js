"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
// Import 01
var validator_1 = require("./modules/validator");
// Import 02
var validator_2 = require("./modules/validator");
// Import 03
var validator_3 = require("./modules/validator");
// Import 04
var validators = require("./modules/validator");
var expect = chai.expect;
describe('about modules', function () {
    it('1-can import a class exported by the module', function () {
        var validator = new validator_1.ZipCodeValidator();
        expect(validator.isAcceptable('12345')).to.be._;
    });
    it('2-can import a default export', function () {
        var validator = new validator_2.default();
        expect(validator.isAcceptable('12345')).to.be._;
        ue;
    });
    it('3-can rename imports', function () {
        var validator = new validator_3.LettersOnlyValidator();
        expect(validator.isAcceptable('12345')).to.be._;
        lse;
    });
    it('4-can import everything', function () {
        expect(validators.lettersRegexp.test('ABCDE')).to.be._;
        expect(validators.numberRegexp.test('12345')).to.be._;
        ue;
    });
});
//# sourceMappingURL=test.js.map