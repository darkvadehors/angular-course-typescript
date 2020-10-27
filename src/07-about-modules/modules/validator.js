"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberRegexp = /^[0-9]+$/;
exports.lettersRegexp = /^[A-Za-z]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
var LettersValidator = /** @class */ (function () {
    function LettersValidator() {
    }
    LettersValidator.prototype.isAcceptable = function (s) {
        return exports.lettersRegexp.test(s);
    };
    return LettersValidator;
}());
exports.LettersOnlyValidator = LettersValidator;
var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.prototype.isAcceptable = function (s) {
        if (isNaN(parseInt(s, 10))) {
            return exports.lettersRegexp.test(s);
        }
        return exports.numberRegexp.test(s);
    };
    return Validator;
}());
exports.default = Validator;
//# sourceMappingURL=validator.js.map