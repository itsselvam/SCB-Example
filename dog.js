"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog = (function () {
    function Dog() {
    }
    Dog.prototype.printToLog = function (message) {
        console.log(message.firstName + ' ' + message.lastName);
        console.log('stuff from dev tools');
    };
    return Dog;
}());
exports.Dog = Dog;
