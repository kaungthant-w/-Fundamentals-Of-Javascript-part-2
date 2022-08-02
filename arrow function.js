const firstJS = document.querySelector(".firstJS");

//arrow function
const calcAge1 = birthYear => 2022-birthYear;
// const age = calcAge(1995);

//retirement
const calcAge2 = (birthYear,firstName) => {
    const age = 2022-birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `My first name is ${firstName} and left ${retirement} years in retirement.`;
}

const me = calcAge2(1995, "Kyaw Myo ");
const friends = calcAge2(1993,"Kaung Thant");


// firstJS.textContent = me;
firstJS.textContent = friends;
// firstJS.textContent = `Hey, my age is ${age}`;