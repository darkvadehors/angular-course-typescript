"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var chai = require("chai");
var expect = chai.expect;
describe('about lambdas', function () {
    it('1-is less verbose', function () {
        var myFirstLambda = _;
        expect(myFirstLambda()).to.equal('Hello World !!');
    });
    it('2-can be used as a filter', function () {
        var collection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var odd = collection.filter(_);
        expect(odd).to.eql([1, 3, 5, 7, 9]);
    });
    it('3-can be used as a reducer', function () {
        var collection = [1, 2, 3, 4];
        var result = collection.reduce(_);
        expect(result).to.equal(24);
    });
    it('4-can keep this', function (done) {
        var LazyCall = /** @class */ (function () {
            function LazyCall() {
            }
            LazyCall.prototype.makeCall = function () {
                this.response = null;
                setTimeout(function () {
                    this.response = 'Done';
                });
            };
            return LazyCall;
        }());
        var lazy = new LazyCall();
        lazy.makeCall();
        setTimeout(function () {
            expect(lazy.response).to.equal('Done');
            done();
        });
    });
    it('5-should be binded', function (done) {
        var LazyResource = /** @class */ (function () {
            function LazyResource() {
                setTimeout(this._storeResponse); //_
            }
            LazyResource.prototype._storeResponse = function (result) {
                this.response = result;
            };
            return LazyResource;
        }());
        var lazy = new LazyResource();
        setTimeout(function () {
            expect(lazy.response).to.equal('Done');
            done();
        });
    });
    it('6-can be used with caution on patch', function () {
        var MyApp = {
            Services: {
                Utils: {
                    _constantFoo: 'Bar',
                    isStringFooBar: function (s) {
                        return !!~s.indexOf(this._constantFoo);
                    }
                }
            }
        };
        var originalTester = MyApp.Services.Utils.isStringFooBar;
        MyApp.Services.Utils.isStringFooBar = function (s) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (s !== 'bar') {
                return originalTester.apply(_this, [s].concat(args)); //_
            }
            return true;
        };
        expect(MyApp.Services.Utils.isStringFooBar('foo')).to.be.false;
        expect(MyApp.Services.Utils.isStringFooBar('bar')).to.be.true;
        expect(MyApp.Services.Utils.isStringFooBar('fooBar')).to.be.true;
    });
});
//# sourceMappingURL=test.js.map