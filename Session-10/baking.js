/*Given you are recipes and ingredients to bake some cakes, work out how many cakes can be baked.​

Your function should take recipe (an object) and ingredient (an object) and 
should return the maximum number of cakes that can be baked as an integer. ​
There are no units of food (assume matching units)​
Ingredients that are not present in the objects can be considered as 0

cakes(recipe{flour: 500, 
            sugar: 200, 
            eggs: 1}, 
ingredients{flour: 1200, 
            sugar: 1200, 
            eggs: 5}) 

            based on the ingredients you can only make 2 cakes// returns 2​

cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {flour: 2000, sugar: 500, milk: 2000}) // returns 0*/

recipe = {
    flour: 500, 
    sugar: 200, 
    eggs: 1
}

ingredients = {
    flour: 1200, 
    sugar: 1200, 
    eggs: 5
}

// for each value of recipe how many of it goes into the ingredients?

let mod = {
    flour : Math.floor(ingredients.flour / recipe.flour),
    sugar:  Math.floor(ingredients.flour / recipe.sugar),
    eggs : Math.floor(ingredients.eggs / recipe.eggs) 
}

console.log(`The number of cakes that can be baked is ${mod.flour}`)