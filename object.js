"use strict";

const firstJS = document.querySelector(".firstJS");

//array
const aryJonas = [
    'Jonas',
    "Tan",
    2022 - 1995,
    'teacher',
    ["Michael", "Peter", "Alice"]
];

console.log(aryJonas);      


//object
const objJonas = {
    firstName : "Jonas",
    lastName : "Tan",
    age : 2022 - 1995,
    job : "teacher",
    friends : ["Michael", "Peter", "Alice"]
}

// console.log(objJonas.firstName);
firstJS.textContent = objJonas.lastName;
firstJS.textContent = objJonas.job;

// dot or bracket operator
console.log(objJonas.firstName);
console.log(objJonas["firstName"]);

const nameKey = "Schemann";
console.log(objJonas.firstName + nameKey);
console.log(objJonas["firstName"] + nameKey);
console.log(objJonas["firstName" + nameKey]);

const interestIn = prompt("What do you want to know about Jonas ? choose one from firstName, lastName, age, job, firends");

console.log(objJonas[interestIn]);
firstJS.textContent = objJonas[interestIn];

if (objJonas[interestIn]) {
    console.log(objJonas[interestIn]);
    firstJS.textContent = objJonas[interestIn];
} else {
    console.log("Wrong request. Plese choose only this firstName, lastName, job, friends");
    firstJS.textContent = "Wrong request. Plese choose only this firstName, lastName, job, friends";
}

objJonas.location = "portugal";
objJonas['twitter'] = "@jonasSchemann";
console.log(objJonas);

//challenge

const bestFriend= `${objJonas.firstName} has ${objJonas.friends.length} friends. His best friend name is ${objJonas.friends[0]}`;

console.log(bestFriend);
firstJS.textContent = bestFriend;