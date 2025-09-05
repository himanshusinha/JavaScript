"use strict";
/* 
let driversLicense = false;
let passTest = true;

if (passTest) driversLicense = true;


// const interface = "audio";
// const private = 23;

// calling running or invoking function
function logger() {
  console.log("My name is Himanshu");
}
logger();
logger();
logger();

// arguements yaha per placeholders hai apples and oranges
// parameters real value hai 5,0
function foodProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = foodProcessor(2, 4);
console.log(appleJuice);

const appleOrangeJuice = foodProcessor(5, 0);
console.log(appleOrangeJuice);

//Functions declarations vs expression

//function declaration we can call before it use

// const age1 = calcAge1(1991);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//function expression it should not work we cannot declare function before use
//const age2 = calcAge2(1991);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);

console.log(age1, age2);


// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));

console.log(yearsUntilRetirement(1980, "Bob"));

// function calling another function
function cutFruitPieces(fruits) {
  return fruits * 4;
}

function foodProcessor(apples, oranges) {
  const appleJuice = cutFruitPieces(apples);
  const orangeJuice = cutFruitPieces(oranges);

  return `Juice with ${appleJuice} pieces of apples and ${orangeJuice} pieces of oranges`;
}

console.log(foodProcessor(2, 5));
console.log(foodProcessor(3, 6));
*/

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  // return retirement;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
  // return;
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));
