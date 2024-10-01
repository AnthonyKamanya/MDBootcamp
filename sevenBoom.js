//Day 4 slide 78
let numbers = [1, 2, 3, 5, 97];

const sevenBoom = (number) => number.toString().includes('7');
if(numbers.some(sevenBoom)){
    console.log("Boom")
}else{
    console.log("No booming here!")
}
