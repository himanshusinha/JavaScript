// let country = "India";
// let continent = "Asia";
// let population = 10;

// console.log(country);
// console.log(continent);
// console.log(population);

/* CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. */

// Test Data 1
// const marksMass = 78;
// const marksHeight = 1.69;

// const BMIMarks = marksMass / (marksHeight * marksHeight);
// console.log(BMIJohn);

// const johnMass = 92;
// const johnHeight = 1.95;

// const BMIJohn = johnMass / (johnHeight * johnHeight);

// const markHigherBMI = BMIMarks > BMIJohn;
// console.log(markHigherBMI);

// Test Data 2
// const marksMass = 95;
// const marksHeight = 1.88;

// const BMIMarks = marksMass / marksHeight ** 2;

// const johnMass = 85;
// const johnHeight = 1.76;

// const BMIJohn = johnMass / (johnHeight * johnHeight);
// console.log(BMIMarks, BMIJohn);
// const markHigherBMI = BMIJohn > BMIMarks;
// console.log(markHigherBMI);

// console.log(`BMIJohn ${BMIJohn} is higher BMI then BMIMarks ${BMIMarks} BMI `);

/* 
CHALLENGE #3
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.


const scoreDolphin = 96 + 108 + 89 / 3;
const scoreKoalas = 88 + 91 + 110 / 3;

if (scoreDolphin > scoreKoalas && scoreDolphin >= 100) {
  console.log("Dolphins wins the trophy 🏆");
} else if (scoreKoalas > scoreDolphin && scoreKoalas >= 100) {
  console.log("Koalas wins the trophy 🏆");
} else if (
  scoreDolphin === scoreKoalas &&
  scoreDolphin >= 100 &&
  scoreKoalas <= 100
) {
  console.log("Both wins the trophy!");
} else {
  console.log("No one wins the trophy!");
}
*/

/* 
CHALLENGE #4
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
