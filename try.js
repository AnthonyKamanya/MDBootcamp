const fruits = ["Apple", "Banana", "Date", "Cherry"];

const dateIndex = fruits.indexOf("Date");

fruits.splice(dateIndex, 1)

fruits.push("Date")

console.log(fruits);