var Dog = (function () {
    function Dog() {
    }
    Dog.prototype.printToLog = function (message) {
        console.log(message.firstName + ' ' + message.lastName);
    };
    return Dog;
}());
var myDog = new Dog();
myDog.printToLog({
    firstName: 'John',
    lastName: 'jerry'
});
