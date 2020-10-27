"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logConstructor(constructor) {
    console.info("Create constructor " + constructor.name);
}
exports.logConstructor = logConstructor;
function logMethod(target, key, prop) {
    return {
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var a = args.map(function (arg) { return JSON.stringify(arg); }).join();
            var result = prop.value.apply(this, args);
            var r = JSON.stringify(result);
            console.info("Call: " + key + "(" + a + ") => " + r);
            return result;
        }
    };
}
exports.logMethod = logMethod;
//# sourceMappingURL=log.js.map