'use strict';
const firstJS = document.querySelector(".firstJS");
let hasDriverLicense = false;
const testPass = true;

if(testPass) hasDriverLicense = true;

if(hasDriverLicense) firstJS.textContent = `Hello, ${hasDriverLicense}`;
if(hasDriverLicense) console.log("Hello.");

let interface = 90;
// console.log(interface);
const privated = true;
console.log(privated);