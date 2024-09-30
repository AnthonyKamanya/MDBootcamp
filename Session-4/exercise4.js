let hour 
function calcRatePerHour(hour){
    if (hour >= 0 && hour <= 5){
        return 300 
    }else if (hour >= 5 && hour <= 10){
        return 350 
    }else if (hour >= 10 && hour <= 15){
        return 500 
    }else if (hour >= 15 && hour <= 20){
        return 700 
    }else if (hour >= 20 && hour <= 24){
        return 400  
    }else {
        console.log("Please enter the right time between 0 to 24")
    }
}
/*

newCustomer = calcRatePerHour(25);

console.log(newCustomer)
/*
function costOfParking(calcRatePerHour){
    totalCost = parking at time1 * calcRatePerHour + parking at time 2 *calcRatePerHour
}*/

const countries = ['France', 'Germany', 'England'];

countries.forEach((country, index) => console.log(`${index + 1} ${country}`));

// For loop version​

for (let i = 0; i < countries.length; i++) {

 console.log(`${i + 1} ${countries[i]}`);
}

//Filter
const numbers = [1, 2, 3, 4, 5 ,6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

//Reduce
const arrayOfNumbers = [1, 2, 3, 4];
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
 return accumulator + currentValue;
});
console.log(sum); // 10​

const numb = [1, 2, 3, 4];


const isEven = (number) => number % 2 === 0;
const hasNumberAbove10 = (number) => number > 10;
console.log(numb.some(isEven)); // returns true​
console.log(numb.some(hasNumberAbove10)); // returns false​ 