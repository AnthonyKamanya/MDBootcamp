/*Write a program to compare two objects to determine if the first one contains the same properties as the other 
(which may contain additional properties). Example:​

​const firstObj = { a: 1, b: 2, c: 3 };​

const secondObj = { a: 1, b: 2, c: 3 };​

const thirdObj = { a: 1, b: 2, d: 3 }​

firstObj and secondObj will return true as they both contain the same properties 
whereas firstObj and thirdObj will return false, as there is no d property in firstObj.​*/
//A better method to compare with is to use Lodash _.isEqual. it more robust and sophisticated solution for comparing objects by their value

const compareObj= (firstObj, thirdObj)=>{
    if(JSON.stringify(firstObj) == JSON.stringify(thirdObj)){
        return true
    }else{
        return false
    }
}

firstObj = { a: 1, b: 2, c: 3 };
secondObj = { a: 1, b: 2, c: 3 };
thirdObj = { a: 1, b: 2, d: 3 }

console.log(compareObj(firstObj,thirdObj))

