# learning-public

Public repo for my learning projects

## 2023/10/26 Thu

## 2023/10/25 Wed

Project Work

## 2023/10/24 Tue

Project Work

## 2023/10/23 Mon

## **Data Structures**

## **Hoisting in JS**

https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648493#content

Makes some type of variables accessible in the code before they are actually declared

To be finished

## **Scoping in practice:**

https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648487#content

To be finished

## **Scoping:**

https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648481#content

How our program's variables are organized and accessed.
Where do variables live?

Lexical scoping: scoping is controlled by placement of functions and blocks in the code

Scope: Space or environment in which a certain variable is **declared**
There is:

- **Global scope:** Outside of ANY function or block. Variables accessed EVERYWHERE
- **Function scope:** Variables accessible only INSIDE the funciton, not outside. Also called local scope
- **Block scope (ES6):** Variables accessibloe INSIDE only. This only applies to LET and CONST. Functions are block scoped

Scope of the variable: Entire region of the code where the variable is accessed

Nested scopes in case of nested functions
Every scope has access to all the scope directly above it.
If Function can't find a variable in it's own scope it'll look in its parent funciton.

An outer scope will never have access to a lower scope.

Scope can look UP but not DOWN.

---

Scope chain vs Call stack

## 2023/10/22 Sun

Nothing to report

## 2023/10/21 Sat

Famiy gathering

## 2023/10/20 Friday

Project Work

## 2023/10/19 Thursday

92. Scope and the Scope chain

---

91.

How JS is executed and the Call Stack

Code ready to be executed.
Creation of global execution context (For top level code)

Let's suppose our code got compiled, code can be executed now.
Global execution context can be created for top level code.

Content in the function is only executed when the function is called

Execution context. Environemnt a piece of a JS code is executed

Pizza (JS Code) Box (Execution conext)
Only 1 execution conext. wher top level code will execute
Execution of Functions and Waiting for Callbacks

**What's inside the Execution Context (EC)**

- Variable environment
  - Let, Const, var
  - Functions
  - Arguments object
- Scope Chain
- THIS Keyword

**_Arrow functions don't thave the arguments object and THIS Keyword!!!_**

CALL STACK
Top level code start xecution, a global EC will be created
This GEC will be placed in the CALL STACK
Function is placed in the Call stack so it's new Execution Context

Call stack: Order of execution is maintained.

Then we will be back at the GLOBAL EXECUTION CONTEXT

---

90 The JS Engine and Runtime:

### JS RUNTIME

JS Runtime: The borwser.
Every JS Runtime has a JS Engine.

WEB APIs - These are part of the Runtime
DOM, Timers, Fetch API

Callback Queue - Data structure that contains all the callback functions that are ready to be executed. (Click, Timer, Data)

Event Loop places callBakc functions from the callback queue to the call stack so they can be executed.

If it's not in the browser ther is no WEB API, C++ Bindings, and Thread Pool

### JS Engine:

The program that executes the JS Code
Every Browser has their own engine. The most known engine is the V8 of Google. Powers Google Chrome and Node JS. the JS runtime. Make serverside applications with JavaScript enginer

Understanding JS Engine component

**CALL STACK** - Objects executed.
Is where our code is executed. in the Execution context

**HEAP** - Objects Tored.
Unstructured memory pool which stores all the object that our application needs. Memory Tab in Chrome, and make a snapshot of the HEAP.

Compilation: The entire Source code is converted to machine code at once. This machine code is then written to a portable file that can be executed to any computer.

Execution can happen after the compilation.

Interpretation: An interpreter that executes the source code line by line. Converted happens right at execution.

Interpreted languages are much slower than compiled languages.

People hting JS is an interpreted language

JS uses a mix of the compilation and interpretation called Just In Time Compilation. This compiles the entire code to machine code at once, and executes right away.

1. Parse the code (Reading) into the Abstract Syntax Tree (AST). First splitting each line of code , then saving these pieces into a structure tree.
   AST has nothing to do with the DOM tree
2. Compilation. Takes the AST and compiles it to Machine Code.
3. Execution
4. During Execution is optimized

const x= 23

---

JavaScript 89. High-Level Overview

https://www.youtube.com/watch?v=FSs_JYwnAdI
ECMA 262

**Surface**

JavaScript is a High-Level, Object Oriented, Multi Paradigm programming
language

**In detail**

JavaScript is a High-Level, Prototype based Object Oriented, LóMulti Paradigm Interpreted or Just-In-Time Compiled, Dynamic Single Threaded, Garbage collected programming language with First-Class functions and a non-blocking event loop concurrency model

### High-Level

Low level: Developer has to manage resources manually
high Level: Developer does not have to worry about resources everything happens mautomaticall, eaasier, but never will be as fast as low level

### Garbage-collected

Algorithm: Removes old unused objects from the memory not to clog it up with unnecessary stuff.

### Interpreted or Just In Time comppiled:\*\*

Human readable machine code, this is compiled or interpreted to machine code.

### Multi Paradigm

An approach or mindset to structure code.

- Procedural Programming:

- Object Oriented OOP (Imperative)
- Functional Programmin FP

Other classification:

- Imperative
- Declarative

### Prototype based Object Oriented

Almost everything in JS is an object
Prototypal inheritance
Prototype
Array prototype: Contains all the array methods.
Our arrays will inherit the methods.

### First-Class functions

Functions are treated as variables.
We can pass functions into other functinos.
Functions are created as variables
We can return functions from functions
We can use power ful techniques, and Functional Programming

### Dynamic

Dynamically typed.
In JS we don't assign datatypes to variables , they only became known ehtn the JS engine executes our code.
Type can be reassigned. This can be a source for bugs. Look into TypeScript

### Single Threaded

Concurrency model: Fancy term: how the JS engine handles multiple things at the same time.
JS runs in a single thread. We need to be able to handle multiple things at the same time.
What if there is a long task? it would block a single thread.
Non-Blocking behaviour

### Non blocking event loop

Event Loop- Takes long running tasks, executes them in the background and puts them back in the main thread once they are finished.

Microtask queue
task queue
Promises

## 2023/10/18 Wednesday

## 2023/10/17 Tuesday

17:00 Codecool coding academy

## 2023/10/16 Monday REACT

## 2023/10/15 Sunday TensorFlow, REACT IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII

---

## Components

React Apps made entirely out of components
Building blocks of user interfaces in React
React renders a view for each component
Building multiple components and combining them as LEGO.
Nesting comopnents in each other

Component tree.

## Debugging

If there is a problem Check:

1. if the App is running
2. STOP the App and RESTART. CTRL C
3. npm start
4. Check the error message, Google error messages
5. Always work with ESLINT
6. Check PROBLEMS tab in VSC
7. Open up the final codes and compare with tutorial codes.

---

## Pizza App

IT WOOOOORKS!!!!
npm start was executed in the project main folder a few levers above the installed ackages: SRC and PUB. once in the correct branch, all good. FUCK YES!!!

**_http://localhost:3000/_**

npx create-react-app@5 pizza-menu

https://www.udemy.com/course/the-ultimate-react-course/learn/lecture/37350408#overview

Create React App
https://create-react-app.dev/?ref=jonas.io
https://vitejs.dev/guide/?ref=jonas.io
https://gist.githubusercontent.com/gaearon/0275b1e1518599bbeafcde4722e79ed1/raw/db72dcbf3384ee1708c4a07d3be79860db04bff0/example.html
https://www.javatpoint.com/javascript-loop

---

TensorFlow Starting

## 2023/10/14 Saturday JS: IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII

## 2023/10/13 Friday JS, REACT:IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII

### JavaScript - Loops

    for(let rep=1;rep <= 10; rep++) {
    console.log(`Lifting weights ${rep}`);
    }

Loop backwards,
Loop in Loops

While loop

LIVE SERVER
Extension

https://www.javatpoint.com/javascript-loop

## 2023/10/12 Thursday JS: IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII

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

## 2023/10/08 Sunday JS: IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII

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

## 2023/10/07 Saturday JS: LetConstVar, Operators, IIIIIIIIIIIIIIIIIIIIIIIIII

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

## 2023/10/06 Friday JavaScript IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII

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
