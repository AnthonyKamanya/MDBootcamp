/*Write a program to convert comma-separated values (CSV), into a 2D array. 
A new line indicates a new row in the array​

Example input:​ 
abc,def,ghi​
jkl,mno,pqr​
stu,vwx,yza*/

let randomArray =['abc','def','ghi','jkl','mno','pqr','stu','vwx','yza']

const twoDArray = (oneArray)=>{
    // find the length of the Array
    // divide the length by 3- matrix required
    // after the each multiple of 3 introduce a new line

    let threeDArray = 3

    let arr1 = oneArray.splice(0,threeDArray)
    let arr2 = oneArray.splice(0,threeDArray)
    let arr3 = oneArray.splice(0,threeDArray)

    console.log(arr1)
    console.log(arr2)
    console.log(arr3)
}

twoDArray(randomArray)