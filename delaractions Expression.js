'use strict';

const firstJS = document.querySelector(".firstJS");

const haveFruits = 23;
// cookingFood1(10);

//function deleraction
function cookingFood1(cookFood) {
    return haveFruits - cookFood;
}

console.log(cookingFood1(3));
firstJS.textContent = `It has ${cookingFood1(3)} foods.`;


// firstJS.textContent = `It has ${cookingFood2(9)} foods.`;

//function expression
const cookingFood2 = function(cookFood) {
    return haveFruits - cookFood; 
} 

