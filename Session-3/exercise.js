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


// Conditions 
let age = 12;

if (age < 18){
console.log('Too young to vote!');
}

if (age < 18){
console.log('Too young to vote!');
}
else {console.log(`You're ${age} years old, 
therefore you're old enough to vote!`);}// ooh this is new​

const baggageWeightInLbs = 200;

let additionalCost = 0;

if (baggageWeightInLbs < 20) {

   console.log('No extra costs');

} else if (baggageWeightInLbs < 30) {

   additionalCost += 5;

} else if (baggageWeightInLbs < 40) {
   additionalCost += 10;

} else {

   console.log('What are you travelling with? an Elephant?');

}

//Exercise Activity. Weekly routine

let daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

let indexOfDay = 1

if(indexOfDay < 4 ){
    console.log(`On a ${daysOfTheWeek[indexOfDay]} I go to the gym`)
}
else{console.log(`On a ${daysOfTheWeek[indexOfDay]} i do gardening`)
};


//Activity 2:Golf Score


const shotNames = ["Hole in one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey" , "Quit"]; 
const par = 0; 
const strokes = 0;

if (strokes == 1){
    console.log(shotNames[0])
}
else if(strokes <= par - 2){
    console.log(shotNames[1]);
}
else if(strokes == par - 1){
    console.log(shotNames[2]);
}
else if(strokes == par){
    console.log(shotNames[3]);
}
else if(strokes == par + 1 ){
    console.log(shotNames[4]);
}
else if(strokes == par + 2){
    console.log(shotNames[5]);
}
else{
    console.log(shotNames[6])
}


//Activity 3 Rock Paper Scissors

//Activity 5
let text = 'hello';
let times = 0;
for(times = 0; times < 3; times++ ){
    console.log(times*text)
}

let newNum = 0
let previousNum = 0
for(let i = 0; i < 10; i++,newNum = newNum + previousNum){
    previousNum++
    console.log(newNum)
}
let timesTables =""

for (let row = 1; row <= 10; row++) {

    for (let col = 1; col <= 10; col++) {

    timesTables += (col * row) + '\t';

    }

    timesTables += '\n';

}

console.log(timesTables);



const growthRate = 0.04; // 4%​

let population = 800; // initial population​

let year = 0; // zero, i.e. present time​

while (population <= 1200){

    let tempPopulation = population * (1 + growthRate);

    population = tempPopulation;

    year++;

}
console.log(`Population first goes over 1200 after ${year} years`);

console.log(`Population is: ${population}`);