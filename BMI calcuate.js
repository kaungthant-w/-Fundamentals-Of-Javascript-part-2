const firstJS = document.querySelector(".firstJS");

const markBMI = {
    fullName : "Mark Miller",
    mass : 78,
    height : 1.69,
    calcBMI : function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;    
    }

}

const johnBMI = {
    fullName : "John Smith",
    mass : 92,
    height : 1.95,
    calcBMI : function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

markBMI.calcBMI();
johnBMI.calcBMI();
// console.log(markBMI.calcBMI(), johnBMI.calcBMI());
console.log(markBMI.bmi, johnBMI.bmi)

if(markBMI.calcBMI() > johnBMI.calcBMI) {
    console.log( `John's BMI (${markBMI.bmi}) is higher than Mark's BMI(${johnBMI.bmi})`);
} else if(johnBMI.calcBMI > markBMI.calcBMI) {
    console.log(`Mark's BMI(${markBMI.bmi}) is higher than John's BMI (${johnBMI.bmi})`);
}

// const higherBMI = markBMI.calcBMI() > johnBMI.calcBMI() ?  `John's BMI (${markBMI.calcBMI}) is higher than Mark's BMI(${johnBMI.calcBMI})` : `Mark's BMI(${johnBMI.calcBMI}) is higher than John's BMI (${markBMI.calcBMI})`;

// firstJS.textContent = higherBMI;
// console.log(higherBMI);