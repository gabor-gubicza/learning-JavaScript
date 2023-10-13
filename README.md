# learning-public

Public repo for my learning projects

## 2023/10/13 Friday JS:

### JavaScript - Loops

## 2023/10/12 Thursday JS:

### JavaScript - Objects

    const jonas = {         //Object litteral syntax
    firstName: 'Jonas',
    lastName: 'Schmidt',
    age: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven', 'Gabor', 'Curtis'],
    hasDriversLicense: true,

    calcAge: function(birthYear){       // Function expression here
        return 2037-birthYear;
    }

**Any Function attached to an object is a method!**
A method is also a property (that holds a function)

    console.log(jonas.calcAge(1991));
    console.log(jonas['calcAge'](1991));

"this " Operator Don't Repeat Yourself

    calcAge: function() {       // We need Function expression here
        //console.log(this);
        return 2037 - this.birthYear;
    }

Funcion info:

    getInfo: function() {
        return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers License.`;

Jonas is a 46 year old teacher, and he has no drivers License.

## 2023/10/08 Sunday JS:

### Objects

Array: Can't be referenced by a name, only order number.

    const jonas = {         //Object litteral syntax
    firstName: 'Nonas',
    lastName: 'Schmidt',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
    }

Arrays: Ordered data

Object: Unstructured data, that we want to name

Bracket notation: Can be an expression!

    console.log(jonas);
    console.log(jonas.lastName);
    console.log(jonas['lastName']);     //Can be an expression here

    const nameKey = 'Name';
    console.log(jonas['first'+ nameKey]);     //Can be an expression here
    console.log(jonas['last'+ nameKey]);     //

---

### Array Methods

- **push:** Method that adds elements to the end of the array. push can return tihngs
- **unshift** . Adds elements to the beginning ofthe array
- **pop** Removes last element, returns the value
- **shift**Removes first element, returns the value
- **indexof** number of position in the array of a position. Doesn't seem to return 2 values if the item is duplicate.
- **includes**

  const friends = ['Michael', 'Tony', 'Michelle'];
  friends.push('Jay');
  console.log(friends);

## 2023/10/07 Saturday JS: LetConstVar, Operators,

Markdown Syntax:
https://www.markdownguide.org/basic-syntax/

---

### Arrays

---

### Functions and Expressions

Variable for whole chunks of code
Reuse a piece of code
Receive data and return data

Keep the code DRY
Don't Repeat Yourself!

Function Declaration

    function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
    }

Function Expression

https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Operators/function

Arrow Function
Arrow Functions don't get This Keyword

Functions calling functions

### Strict Mode

- Forbids certain things.
- Produces visible errors
- Introduce a shortlist of variable names of features that might be added later.

---

### History of JAVASCRIPT

1997 - Brendan Eich, first version of JavaScript in 10 days - called Mocha

Mocha -> LiveScript -> JavaScript
Microsoft copying JavaScript to JScript
ECMA -
ECMA is the standard, JS is the language
EcmaScript changed to yearly releases.
2009 - ES5
2015 - ES6 Biggest update to the language

JS: Backward compatibility 25
Old versions are neber removed.
Releases NOT versions.

Don't Break the Web!
inlcuding BUGS.
Learn new JavaScript, just go around the bugs.

Foreward compatibilit.
JS is NOT forward compatible.

- Development

  - use the latest browser

- Production
  - Babel - Transpile, Polyfill the code Converting back to ES5 to ensure broweser compatibility for all users.

ES6+ All the latest releases

---

### Challenge 4

    const tip50_300 = 0.15;
    const tipElse = 0.2;
    const bill = 51 ;
    const tip = (bill > 50 && bill < 300) ?  tip50_300 : tipElse ;
    console.log(`
    Bill:   ${bill}
    Tip:    ${tip}
    Total:  ${bill * (1+tip)}
    `);

---

### Conditional Operator

    const age =25;
    const drink = age >= 18 ? 'wine' : 'water';
    console.log(drink)

---

### Statements and expressions

Statement: Does not produce a value Ends with semicolon
Expression: Produces a value
Template leteral: Expression

---

### SWITCH statement

    const day = 'monday'
    swithc(day) {
    case 'monday':
        console.log(Plan course structure);
        break;
    case 'tuesday':
        console.log(Shoot videos);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(Record videos);
        break;
    case 'friday':
        console.log(Ship);
        break;
    case 'saturday':
    case 'sunday':
        console.log(enjoy);
        break;

    }

---

### Boolean Logic / Logical operators

Karnaugh Map / K-Map

- && AND operator
- || OR operator
- ! NOT operator

---

### Equal operators

== loose operator: does allow coercion: Avoide loose operator if possible. It's better to convert manually than to use coercion.

=== strict operator: doesn not perform type coercion

!== Different operator

---

### Truthy and Falsy

**Falsy values (5)**

- 0
- ''
- undefined
- null
- NaN

**Truthy values**

- All values except Falsy values
- https://developer.mozilla.org/en-US/docs/Glossary/Truthy

---

### Type Conversion

Type Coercion: JS automataically coneverts types

NaN is a number type with invalid number content

Number()
String()
Boolean()

Converting Booleans

---

If ELSE control structure

Emoji:
Mac: CMD + CTRL + Space
WIN: Win + .

If a variable is declare INSIDE a code block, it can't be accessed by other parts of the program.

---

### Strings and Template Literals

Type Coercion

const jonas = "I'm " + firstName + ', a' + (year-birthYear) + 'years old ' + job + '!';

Template Literals:
Most used ES6 features

Using backticks `

const jonasNew = `I'm ${firstName}, a ${year - birtrhYear} year old ${jpb}`;

Using backticks then you don't need think about ...

Multi line console log \n\
This only works because of a bug in the software

Backticks can make new lines

---

### Challenge 1: BMI Comparison of 2 person

https://github.com/gabor-gubicza/learning-public/tree/main/JavaScript/Course_1/Challenges

    let massMark = 78;                  //kg
    let massJohn = 92;                  //kg
    let heightMark = 1.69;              //m
    let heightJohn = 1.95;              //m
    let BMIghtMark = (massMark / heightMark ** 2).toFixed(2) ;      // 2 Decimals
    let BMIJohn = (massJohn / heightJohn ** 2).toFixed(2) ;
    let markHigherBMI = BMIghtMark > BMIJohn;

    console.log("Mark's BMI:", BMIghtMark);
    console.log("John's BMI:" , BMIJohn);
    console.log("Mark's BMI is larger than John's?: ", markHigherBMI);

---

### OPERATOR

- Aritchmetic Operator
  - plus minus multipl. div.
  - \*\* is power ^
  - Plus can also concenate - console.log(firstName + ' ' + lastName);
- TypeOf Operator
- Assignment operator
  - = let x = 10 + 1;
  - += Meaning: => X = X + 10
  - ( * =) Meaning: => X=X*4
  - ++ Increment
  - -- Decrement
  - (> ,<, <=, >=) Greater etc...
  - console.log(now - 1991 > now - 2018); The two arithmetic operators are done, then the assingment operator
  - JS has a well defined order of operator precedence:
    - MDN operator precedence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
    - Larger number has higher precedence (1..18)
  -

---

### LET

Declare variable that can change later,

- reassigning a variable,
- mutate the variable

### CONST

Declare variable CAN NOT be changed
Immutable variable

Const can't be EMPTY
Always use CONST as a declaration first, then use Let.
Make as little variable mutation as possible

### VAR

This should be completely avoided. For legacy reasons.
Old way to defining variables before ES6 (EcmaScript)

## 2023/10/06 Friday JavaScript

### Variable notation

- camelCase
- snake_case
- PascalCase

### Variables can only contain:

- numbers
- letters
- dollar sign $
- underscore
- "name" is reserved keyword
- PI is a constant - all capital.
- Variable names can't start with number. Syntax error

### Data Types

Value

- object
- primitive
  - Number
  - String
  - Boolean
  - Undefined
  - Null
  - Symbol (ES2015)
  - BigInt (ES2020)

Data types are determined AUTOMATICALLY in JS
The value that stores the data type not the variable

Dynamic Typing

Undefined means: Empty value:

let year;
year = 2001;

console.log (typeof year);

### NULL

**Bug in JS: Type of null is Object.**
null is a datatype similar to undefined
Value and types are BOTH NULL.

This is not corrected for legacy reasons

### Commnets:

Single line Comment //

Block Comment: Command slash -

/\* \*/

### Markdown Cheat sheet: https://wordpress.com/support/markdown-quick-reference/

## 2023/10/5 Thurday

JS learning
VS Config

## 2023/10/2 Monday

install -i prompt-sync: -i was needed to make it work
MavBook: Runs JS code with Prompt
PC: Environmental variable had to be updated for npm

## 2023/10/3 Tuesday

I saw a very good documentary on TypeScript:
https://youtu.be/U6s2pdxebSo?si=ewbP9900zgYibjbr

## 2023/10/2 Monday

Google Chrome Extension Tutorials

## 2023/10/1 Sunday

Switching from HW to SW is going to be a major effort. I need to be collected, organized, focused, rested and dedicated.

I reformatted my Readme- Logbook so the most upto date is on top.

## 2023/09/30 Saturay

### 1 Installing JS and Node JS on MacBook

Installing NodeJS, JS on MacBook
Saved VSC Workspace to Repo root
First JS program works - console print

## 2023/09/29 Friday

### -1 SaturdayInstalling JS and Node JS on PC

I installed NodeJS with NPM restarted VSC and it lost the repo.
I can't clone repo due to SSH not being set up and workspace wasn't saved

## 2023/09/28 Thursday

### 1 Github testing

This is my 2nd commit as I'm experimenting with GitHub
28/09/2023

### 2 Github testing: Motherfucking VIM, Idiotic Apple keyboard layout!

Motherfucking VIM, and Apple keyboard layout

Problem:
I synced up GitHub and VSC on my PC laptop, I wanted to clone the repo to my macbook.
I opened VSC on my macbook, but GitHub didn't accept the authorization.
I had to set up the SSH key for my Mac. I found a YouTube tutorial.
It used VIM to make the config file...but I have Hungarian keyboard where the star symbol is missing and
couldn't find it on keyboard maps. I was messing around so VIM got into an insert mode I couldn't add text anymore.
Then after 10 minutes I realized there are other terminal editors, I googled and remembered NANO.
But nano doesn't have the :wq to write and quit. it had CTRL X.

### 3 VSC updated with Extensions

- Auto Open Markdown
- Colorize
- Eslint
- GitLens
- Import Cost
- Peacock
- Project Manager
- vscode icons
- indent rainbow

10:42 video done in 45 minutes.
Fuck me.
