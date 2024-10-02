const fibonacciSequence = () => {
    let num = 0
    let newNum = 1
    let fibArray
    while(num < 40){
        console.log(num)
        fibArray = num + newNum
        num = newNum
        newNum = fibArray
    } 
}

let fib = fibonacciSequence();
console.log(fib)