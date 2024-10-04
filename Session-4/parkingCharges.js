// Write a program for NPC that calculates the cost of parking based on the time of day. 
// It takes in hour as a parameter and returns cost of parking:

// Hour 0 is deemed as midnight​
//   Hour 1 is 1am​
//   Hour 13 is 1pm​
//   - Hours between midnight to 5am costs 300​
//   - Hours between 5am to 10am costs 350
//   - Hours between 10am to 3pm costs 500​
//   - Hours between 3pm to 8pm costs 700​
//   - Hours between 8pm to midnight costs 400​

function calcRatePerHour(hour){
    if (hour >= 0 && hour <= 5){
        return 300 
    }else if (hour >= 5 && hour <= 10){
        return 350 
    }else if (hour > 10 && hour <= 15){
        return 500 
    }else if (hour > 15 && hour <= 20){
        return 700 
    }else if (hour > 20 && hour <= 24){
        return 400  
    }else {
        console.log("Please enter the right time between 0 to 24")
    }
}


let parkingCharge = calcRatePerHour(26)

console.log(parkingCharge)