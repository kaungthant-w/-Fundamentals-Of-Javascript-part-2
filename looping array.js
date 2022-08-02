const objJonas = [
    "jonas",
    "Schemann",
    "teacher",
    1995,
    false

];

const types = [];

for(let i = objJonas.length - 1; i >=0 ;i--) {
    // if(typeof objJonas[i] !=="number") break;
    console.log( i, objJonas[i]);
    //filling type array
    // types[i] = typeof objJonas[i];
    // types.push(typeof objJonas[i]);
}

console.log(types);

const years = [1995, 1998, 2001];
const ages = [];

// continue , break
for(let i=0;i<years.length;i++) {
    ages.push(2022-years[i]);

}

console.log(ages);