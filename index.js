"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dotpath(str) {
    const parts = str.split('.');
    const len = parts.length;
    return function parse(obj) {
        var testKey;
        for (var i = 0; i < len; ++i) {
            testKey = parts[i];
            if (!obj)
                return;
            obj = obj[testKey];
        }
        return obj;
    };
}
exports.default = dotpath;
