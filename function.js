'use strict';
const firstJS = document.querySelector(".firstJS");

//function
function logger() {
    console.log("Hello, logger");
    firstJS.textContent = "hello, logger";
}

// logger();


// fruit processor
function fruitProcessor( apple, orange) {

    console.log(apple, orange);
    const juce = `There are ${apple} 🍎 and ${orange}🍊 in the backet.`;
    return juce;
} 

fruitProcessor(32, 2);

const fruit = fruitProcessor(32,33);
console.log(fruit);
// firstJS.textContent = fruitProcessor(323, 33);
firstJS.textContent = fruitProcessor(9, 11);