console.log('Good Morning');

let number1 = 10;

let number2 = 20;

let result = number1 + number2;
console.log(result);
let anotherResult = 1 + 4;
console.log(anotherResult)

let start = 0; // we can increment by 1​

start++;// now the value is 1. can be used as number of attempts
// number of people in an event
//increase miles on a car
console.log(start);

let x = 1;

console.log(++x); // 2​. calculates and shows immediately
console.log(x); // 2​
console.log(x++); // 2​ calculates but only shows when you print again
console.log(x); // 3

let mobileNumber = 447980099876;

let alternativeMobileNumber = '447980099876';

let results = mobileNumber == alternativeMobileNumber;

console.log(results); // true

let mobileNumber1 = 447980099876;

let alternativeMobileNumber1 = '447980099876';

let results1 = mobileNumber === alternativeMobileNumber;

console.log(results1); // false

//Ternary operators

let speed = 70;

let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';

console.log(message); // Fast