const firstJS = document.querySelector(".firstJS");

const calcAge = function(birthYear) {
    return 2022 - birthYear;
}

const yearUntilretirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;    
    
    if(retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName} has already retired🎉`;
    }

}

firstJS.textContent = yearUntilretirement(1995, "Aung Hla");