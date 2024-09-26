

let message = `This is a long

message about how to use template literals.



Template literals are cool!

`
console.log(message);

const customerName = "John Doe";

console.log("length of name", customerName.length)


let browser = 'practice';

let half = browser.length/2 

console.log(browser[half-1],browser[half]);

/* IndexOf to figure out if a character exist*/

let emailAddress = 'johndoe@somewhere.com';
console.log(`Does @ exist in the email?`,emailAddress.indexOf("@"))

let messageNotInclusive = 'This is a simple message';
console.log(`A comma should not exist`,message.indexOf(","))

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'

const searchTerm = 'dog';

const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);

let filename = 'my-word-document.doc';
const indexOfPeriod = filename.lastIndexOf('.')

console.log(filename.substring(indexOfPeriod));

const phrase = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(phrase.replace('dog','monkey'));

const regex = /Dog/i;
console.log(phrase.replace(regex,'ferret'));


const prase = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(prase.replaceAll('dog','monkey'));


const reGex = /Dog/ig;
console.log(phrase.replace(reGex,'ferret'));


const str = 'The quick brown fox jumps over the lazy dog.'
console.log(str.slice(31));
console.log(str.slice(4,19));
console.log(str.slice(-4));
console.log(str.slice(-9,-5));

let fullName = `John Doe`

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());


const words =str.split(' ');
console.log(words)
console.log(words[3])

const char =str.split('');

console.log(char[8]);

let radius = 4.5;

let circumference = parseFloat(radius) * 2.0 * Math.PI;

console.log('circumference as a float', circumference);

const APPLY_SALARY_INCREASE =true;
console.log(APPLY_SALARY_INCREASE);

const firstName = "John"
const age = 25;
/*
const person = {firstName: 'John',
    age: 25​
};
console.log(person);

const persons ={
    name: 'John',
 
    age: 25
 
 };
 // we use the dot notation to extract each property:​
 
 console.log(persons.name);
 
 console.log(persons.age);
 
 // let's check the types of the person and properties:​
 
 console.log(typeof persons);
 
 console.log(typeof persons.name); */

const now = new Date();

console.log(now);

const fruits = ["Apple","Banana","Mango"]
console.log(fruits);

const lotteryNumbers = [9, 23, 44, 12, 8, 34]
console.log(lotteryNumbers);

const mixedArray = ["Apple",12,3.14,"Mango"]
console.log(mixedArray);

const user = [["Tobi", 18], ["Akin", 21], ["Dola", 20]];

console.log(user);

const users = [["Tobi", 18], ["Akin", 21], ["Dola", 20]];

console.table(users);

const toDos =[

    { id: 1, text: "Prepare meeting agenda", isCompleted: true },
 
    { id: 2, text: "Send weekly report", isCompleted: false },
 
    { id: 3, text: "Organise desk", isCompleted: true }
 
 ];
 
 console.log(toDos[0].text); // Output: 'Prepare meeting agenda'==

 console.log(toDos[2].text)
 console.log(toDos[1])

 const fruitList = ["Apple", "Banana", "Date", "Cherry"];

const dateIndex = fruitList.indexOf("Date");

fruitList.splice(dateIndex, 1)

fruitList.push("Date")

console.log(fruitList);


const veges = new Set()
veges.add("apple");
veges.add("banana");
veges.add("apple");
veges.add(5);
console.log(veges);

let bus = ['Ryan', 'Brandon', 'Rebecca', 'Richard', 'Jessica', 'Brian', 'Antoinne', 'Grace', 'Zee', 'Ibrahim'];

bus.pop();
bus.unshift("Ibrahim");
bus.push("Rebecca");
console.log(bus);