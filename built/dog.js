"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Dog = (function () {
    function Dog() {
    }
    Dog.prototype.printToLog = function (message) {
        console.log(message.firstName + ' ' + message.lastName);
        console.log(_.join(['Hello', 'webpack', 'more', 'words'], ' '));
    };
    return Dog;
}());
exports.default = Dog;
//# sourceMappingURL=dog.js.map