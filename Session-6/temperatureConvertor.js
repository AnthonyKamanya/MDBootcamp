// When given:​
// Fahrenheit, a value should be converted to Celsius​
// Celsius, a value should be converted to Fahrenheit​

// Tip:​
// To obtain temperature in Celsius: (F - 32) / 9 x 5​
// To obtain temperature in Fahrenheit: (C * 1.8) + 32​
// Write several tests to ensure the above calculations provide the correct result.​
// You may use an online converter to check for expected results.​



const temperatureCalcCel = (fahrenheit) =>{
let celsius = (fahrenheit - 32)/ 9 * 5
    celsius = Math.floor(celsius)
console.log(`The temperature from  ${fahrenheit} fahrenheit is ${celsius} degree celsius`)
} 

const temperatureCalcFah = (celsius) =>{
let fahrenheit = (celsius * 1.8 ) + 32
    fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature from  ${celsius} celsius is ${fahrenheit} degree celsius`)
}

temperatureCalcCel(-45)
temperatureCalcFah(20)