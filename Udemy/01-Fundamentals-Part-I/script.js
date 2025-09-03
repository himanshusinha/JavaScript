/* let js = "amazing";
js = "boring";
console.log(js);
console.log(23);
console.log(40 + 8 + 23 - 10);

let firstName = "Jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let PI = 3.141;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";


let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);
console.log(typeof true);
console.log(typeof 21);
console.log(typeof "Jonas");

javaScriptIsFun = "YES!";

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

// let const

let age = 30;
age = 32;
console.log(age);

var job = "programmer";
job = "teacher";
console.log(job);

const PI = 3.141;
PI = 1212;
console.log(PI);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
console.log(ageJonas, ageSarah);

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10; // x = x +10 // x = 15+10 x = 25
x *= 4; // x = x * 4 // x = 25 * 4 x = 100
x++;
x--;
x--;
console.log(x);
console.log(ageJonas > ageSarah); //> < >= <=
console.log(ageJonas >= 18);

console.log(now - 2037 > now - 1991);
console.log(25 - 10 - 5);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);


const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm" + firstName + " ,a " + (year - birthYear) + " years old " + job + "!";

const newJonas = `I'm ${firstName} a  ${year - birthYear} years old ${job} !`;

console.log(jonas);
console.log(newJonas);

console.log("Just a regular string");
console.log(
  "String with \n\
multiple \n lines"
);

console.log(`String with
multiple
lines`);


const age = 19;
if (age >= 18) {
  console.log(`Sarah is able to drive a car 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young wait for another ${yearsLeft} years :)`);
}

const birthYear = 2001;
let century = "";
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.l log(century);


// Type Conversion and Type Coersion

const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);
console.log(String(23), 23);

//type coersion
console.log("I 'm " + 23 + " years old ");
console.log("I 'm " + " 23 " + " years old ");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

// 5 falsy values 0 '' null undefined NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

let money = 100;
if (money) {
  console.log("Dont spend it all");
} else {
  console.log("You should do job");
}

let height = 0;
if (height) {
  console.log("height is DEFINED");
} else {
  console.log("height is UNDEFINED");
}

// == vs ===
const age = "18";
if (age === 18) console.log("You just became an adult :D (strict)");

if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number"));
console.log(typeof favourite);
if (favourite === 23) {
  console.log("23 is favourite number");
} else if (favourite === 9) {
  console.log("9 is another cool number");
} else if (favourite === 7) {
  console.log("7 is another cool number");
} else {
  console.log("Number not 23 7 and 9");
}
if (favourite !== 23) console.log("Why not 23");

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false;

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Some one should drive");
}

// Switch Statement

const day = "friday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoay weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

// if elseif
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy weekend :D");
} else {
  console.log("Not a valid day!");
}

3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
 */
const age = 20;
const drink = age >= 18 ? "wine 🍷" : "water 💧";

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18} 'wine 🍷':'water 💧'`);
