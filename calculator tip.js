"use strict";

const firstJS = document.querySelector(".firstJS");

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(calcTip(125));
// console.log(calcTip(555));
// console.log(calcTip(44));

const bills = [125, 555, 44];
const tips = [bills[0] , bills[1] , bills[2]];
console.log(tips);

const total = [bills[0] + tips[0], bills[1]+tips[1], bills[2] + tips[2]];
console.log(total);

console.log(bills, tips, total);

calcTip(bills);

firstJS.textContent = calcTip(bills[0]);
// firstJS.textContent = calcTip(tips[0]);
// firstJS.textContent = calcTip(total[0]);
