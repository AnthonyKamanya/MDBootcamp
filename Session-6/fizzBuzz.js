// Write a program that:​
// Returns "fizz" if the number is a multiple of 3​
// Returns "buzz" if its multiple of 5​
// Returns "fizzBuzz" if the number is divisible by both 3 and 5.​
// If the number is not divisible by either 3 or 5 
// then it should just return the number itself.​
// Added challenge: Enhance your program to print out the outcome 
// if provided a range of numbers 1 to 20 (i.e. a min and a max). For example it should print:​
// 1 2 fizz 4 buzz fizz ...​


function fizzBuzz(num){
       if (num % 3 == 0 && num % 5 == 0)
        return "fizzBuzz"
    else if (num % 3 == 0 ){
        return "fizz"
    }else if( num % 5 == 0){
        return "buzz"
    }else if( num % 3 != 0 || num % 5 != 0)
        return num
        
    }
    

let result= fizzBuzz(20)
console.log(result)
