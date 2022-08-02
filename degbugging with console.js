'use strict';
const measureKelvin = function () {
    const measurment = {
        type : "temp",
        unit : "celsius",
        value : prompt("Degrees celsius:"),
    }

    console.log(measurment.value);
    console.warn(measurment.value);
    console.error(measurment.value);
    const kelvin = Number(measurment.value )+ 23;
    return kelvin;
}

console.log(measureKelvin());