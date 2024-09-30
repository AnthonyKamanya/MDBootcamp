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
