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