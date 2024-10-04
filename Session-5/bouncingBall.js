// A child is playing with a ball on the nth floor of a tall building. ​
// The height h of this floor is known. He drops the ball out of the window. 
// The ball bounces to two thirds of it's height, i.e. 0.66. 
// His mother looks on from a window that is 1.5m from the ground.​
// How many times will the mother see the ball pass her window (including the time the ball falls and whilst its bouncing)?​

// Assume you have the following arguments to your function:​
// h is a float that is greater than 0 ​
// bounce is a float that is greater than 0 and less than 1 ​
// window must be less than h​
// If all of the above argument criteria are matched, 
// return the outcome of occurrences, as an integer, otherwise return -1​


const bouncingBall=(heightOfBounce)=>{
    const reduceHeight = 0.66
    const mothersHeight = 1.5
    let listOfBounce = []
    if(mothersHeight > heightOfBounce){
        return -1
    }else{
        while(mothersHeight < heightOfBounce ){
            listOfBounce.push(heightOfBounce);
            heightOfBounce = heightOfBounce * reduceHeight;
            if(mothersHeight < heightOfBounce){
                listOfBounce.push(heightOfBounce); //why am i repeating this?
            }
        } return listOfBounce.length
        
    } 
}

let result = bouncingBall(3)
console.log(result)