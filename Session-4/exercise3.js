setTimeout(function() {
console.log('Hello');
}, 4000);

console.log('1');
function sayHello() {
   console.log('Hello');
}
setTimeout(sayHello, 3000);
console.log('3');