'use strict';

const firstJS = document.querySelector(".firstJS");

const friends = ["Maechael", "John ", "Shemantiya"];

// push method (insert last ) , join method
const newLength =  friends.push("Mr.Jay");
console.log(friends);
firstJS.textContent = friends.join(" ");
console.log(newLength);

// unshift method (insert first)
friends.unshift("Natasha");
console.log(friends);

//remove element (last)
friends.pop();
console.log(friends);
const remlast2 = friends.pop();
console.log(remlast2)

console.log(friends);


// remove element (first)
friends.shift();
console.log(friends);
const remfirst2 = friends.shift();
console.log(remfirst2);
console.log(friends);


const secFriends = ["Malay", "Kaung Kyaw", "Tha Lay", "Kyaw Kyaw"]; 

//indexOf method
const indSearch = secFriends.indexOf("steven");
console.log(indSearch);

console.log(secFriends.indexOf("Malay"));
console.log(secFriends.includes("Marla"));
console.log(secFriends.includes("Kaung Kyaw"));

secFriends.push(24);
console.log(secFriends.includes("24"));
console.log(secFriends.includes(24));

const bestFriend = "kaung Kyaw";

if(secFriends.includes("Kaung Kyaw")) {
    firstJS.textContent = `Your best friend's name is ${bestFriend} . Now, Your friend have in town.`;
}
