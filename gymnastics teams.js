const firstJS = document.querySelector(".firstJS");
firstJS.style.color = "#fb2";

const calcAge = (a, b, c) => (a + b + c) / 3 ;

const scoreDolphins = calcAge(44, 23, 71);
const scoreKoalas = calcAge(65, 54, 49);

console.log(scoreKoalas);
console.log(scoreDolphins);

const checkWinner = (avgDolhins, avgKoalas) => {

    if(avgDolhins > 2*avgKoalas) {
        firstJS.textContent = `Dolphins win 🏆 (${avgDolhins} VS ${avgKoalas}) `;
    } else if(avgKoalas > 2*avgDolhins) {
        firstJS.textContent = `Dolhins win 🏆 (${avgKoalas} VS ${avgDolhins})`;
    } else {
        firstJS.textContent = "No team win!";
    }
} 

checkWinner(scoreDolphins, scoreDolphins);
checkWinner(32,322);

