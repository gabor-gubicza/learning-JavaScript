/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀


*/
const prompt = require("prompt-sync")();

let massMark = 78;             //kg
let massJohn = 120;             //kg
let heightMark = 1.69;         //m
let heightJohn = 1.95;         //m
let BMIMark = (massMark / heightMark ** 2).toFixed(2) ;
let BMIJohn = (massJohn / heightJohn ** 2).toFixed(2) ;
let markHigherBMI = BMIMark > BMIJohn;

console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:" , BMIJohn);
// console.log("Mark's BMI is larger than John's?: ", markHigherBMI);

if (BMIMark>BMIJohn) {
    console.log(`Mark's BMI is larger ${BMIMark}`);
} else {
    console.log(`John's BMI is larger ${BMIJohn}`);
}

let work = prompt("A: ");
console.log(work)