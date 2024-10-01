const sumOfSequence=(beginOfArray,endOfArray,addUp)=>{
    let listOfNum = []
    if(beginOfArray > endOfArray){
        return 0
    }else{
        while(beginOfArray <= endOfArray){
            listOfNum.push(beginOfArray);
            beginOfArray += addUp;
        } let sumOfArray = listOfNum.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
          ); return sumOfArray
        
    } 
}

let result = sumOfSequence( 5, 5, 2)
console.log(result)