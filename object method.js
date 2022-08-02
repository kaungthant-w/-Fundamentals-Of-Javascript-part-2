"use strict";
const firstJS = document.querySelector(".firstJS");

const objJonas = {
    firstName : "jonas",
    lastName : "Schemann",
    job : "teacher",
    birthYear : 1995,
    driverLicense : false,
    calcAge : function(birthYear) {
        // console.log(2022-this.birthYear);
        // firstJS.textContent = 2022-this.birthYear;
        console.log(this);
        return 2022 - birthYear;
    } ,
    getSummary : function () {
        return `${this.firstName} is a ${2022-this.birthYear} year old teacher, and he has ${this.driverLicense ? 'a' : 'no'} driver's license `;
    }
}

// objJonas.calcAge(2002);
firstJS.textContent = objJonas.calcAge(1995);
firstJS.textContent = objJonas.getSummary();