"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var expect = chai.expect;
var decorator = require("./decorators/log");
describe('about decorators', function () {
    var calculator, logStack = [];
    console.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return logStack.push.apply(logStack, args);
    };
    var Calculator = /** @class */ (function () {
        function Calculator() {
        }
        Calculator.prototype.double = function (n) {
            return n * 2;
        };
        __decorate([
            decorator.logMethod,
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", void 0)
        ], Calculator.prototype, "double", null);
        Calculator = __decorate([
            decorator.logConstructor
        ], Calculator);
        return Calculator;
    }());
    beforeEach(function () { return calculator = new Calculator(); });
    it('1-should log constructor', function () {
        expect(logStack).to.eql(_);
    });
    it('2-should log methods', function () {
        calculator.double(2);
        expect(logStack).to.eql([]);
    });
});
//# sourceMappingURL=test.js.map