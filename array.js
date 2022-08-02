
const firstJS = document.querySelector(".firstJS");

const nameContainer = ["Maichale", "Jonash", "Bablon"];

nameContainer.forEach(name => {
    console.log(name);
    // firstJS.textContent = name;
});

const years = Array(1995, 1988, 1990, 2010);
console.log(years[2]);
// firstJS.textContent = years[2];
firstJS.textContent = nameContainer[2];

console.log(nameContainer.length);
console.log(nameContainer[nameContainer.length-1])
firstJS.textContent=nameContainer[nameContainer.length-1];

nameContainer[5] = "Celomon";
console.log(nameContainer);
console.log(nameContainer[5]);

const firstName = "Talaysowa";
const taLay = [firstName, "Scheman", 3021-1993, 'Teacher', nameContainer ];
console.log(taLay);
console.log(taLay.length);


//exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const BornYears = [1993, 1994, 1995, 1998,2001];

console.log(calcAge(BornYears));
firstJS.textContent = calcAge(BornYears);

console.log(calcAge(BornYears[0]));
firstJS.textContent = calcAge(BornYears[3]);

const year0 = BornYears[0];
const year1 = BornYears[1];
const year2 = BornYears[2];
const year3 = BornYears[3];
const year4 = BornYears[BornYears.length-1];

console.log(year0, year1, year2, year3)

const ages = [calcAge(BornYears[0]), calcAge(BornYears[1]), calcAge(BornYears[BornYears.length-1])] ;

console.log(ages);

