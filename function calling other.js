// calling function from other function

const firstJS = document.querySelector(".firstJS");
const cutPieces = function(fruit) {
    return fruit * 3;
}

const fruits = function (apples, oranges) {
    const applePieces = cutPieces(4);
    const orangePieces = cutPieces(3);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
    return juice;
}

firstJS.textContent = fruits(3, 5);