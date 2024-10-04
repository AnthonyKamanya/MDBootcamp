// Assuming you have the following: ​

// ​const shotNames = ["Hole in one!", "Eagle", "Birdie", ​
//     "Par", "Bogey", "Double Bogey" , "Quit"]; ​
    
//     const par = 0; ​
    
//     const strokes = 0

//Return the correct phrase based on strokes and par.​




const shotNames = ["Hole in one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey" , "Quit"]; 
const par = 0; 
const strokes = 8;

if (strokes == 1){
    console.log(shotNames[0])
}
else if(strokes <= par - 2){
    console.log(shotNames[1]);
}
else if(strokes == par - 1){
    console.log(shotNames[2]);
}
else if(strokes == par){
    console.log(shotNames[3]);
}
else if(strokes == par + 1 ){
    console.log(shotNames[4]);
}
else if(strokes == par + 2){
    console.log(shotNames[5]);
}
else{
    console.log(shotNames[6])
}
