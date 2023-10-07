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

let massMark = 78;             //kg
let massJohn = 92;             //kg
let heightMark = 1.69;         //m
let heightJohn = 1.95;         //m
let BMIghtMark = (massMark / heightMark ** 2).toFixed(2) ;
let BMIJohn = (massJohn / heightJohn ** 2).toFixed(2) ;
let markHigherBMI = BMIghtMark > BMIJohn;

console.log("Mark's BMI:", BMIghtMark);
console.log("John's BMI:" , BMIJohn);
console.log("Mark's BMI is larger than John's?: ", markHigherBMI);
