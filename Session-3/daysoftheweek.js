// Given that a day is represented by a number and Monday is represented as the number 1. ​
// Print out when the day is a weekday. ​
// On a Tuesday I go to the gym. Display this. ​
// On a Thursday I go to the gym. Display this. ​
// On a Sunday I do gardening. Display this. 

let daysOfTheWeek = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

let indexOfDay = 5

if(indexOfDay < 4 ){
    console.log(`On a ${daysOfTheWeek[indexOfDay]} I go to the gym`)
}
else{console.log(`On a ${daysOfTheWeek[indexOfDay]} i do gardening`)
};