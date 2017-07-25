"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dog_1 = require("./dog");
var super_dog_1 = require("./super-dog");
var myDog = new dog_1.default();
myDog.printToLog({
    firstName: 'John',
    lastName: 'jerry'
});
var superD = new super_dog_1.default();
superD.printToLog();
//# sourceMappingURL=index.js.map