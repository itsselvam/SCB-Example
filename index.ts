import Dog from './dog';

import SuperDog from './super-dog';

let myDog = new Dog();
myDog.printToLog({
  firstName: 'John',
  lastName: 'jerry'
});

let superD = new SuperDog();
superD.printToLog();
