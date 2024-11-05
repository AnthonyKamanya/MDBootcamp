/*Write a program to satisfy the scenario below.​

Experiment with asynchronous mechanisms callbacks, promises, and async/await to write efficient commented code.​
Scenario: You are preparing lunch for your friend who is coming to your house. 
You have started making sandwiches and your friend is going to the shop to pick up some crisps.​
Start Preparing: Begin making the sandwiches.​

Asynchronous Handling: Your friend will text you to let you know the outcome of their shopping:​
If the Crisps are Available: Plate up the sandwiches.​
If the Crisps are Not Available: Prepare a salad instead.​*/


function preparingLunch(friendText, callback){
    if(friendText){
        callback()
    }else{
        console.log("salad is done, since there are no crisps")
    }
}
function sandwiches(){
    console.log("Sandwiches done, since there is so much crisps")
}

preparingLunch(true, sandwiches)

