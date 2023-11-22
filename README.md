# learning-public

Public repo for my learning projects

## 2023/11/22 Wednesday

Embedded Project work

## 2023/11/21 Tuesday

Email signature project is completed. I practiced HTML, it was cool.

Mech Eng Project work
Embedded Project work
Robotics Project Work

## 2023/11/20 Monday

Email signature design
Web design
Google Fonts

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed:ital,wght@1,300&display=swap" rel="stylesheet">

    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
      rel="stylesheet"
    />

## 2023/11/19 Sunday

Mechanical Engieering Project work.

### 77. Refactoring Our Code: The DRY Principle

## 2023/11/16 Friday

Webdesign
www.rufus-tech.com

## 2023/11/15 Thursday

Forbes Tech Summit - All day

## 2023/11/15 Wednesday

Forbes Tech Summit on Thursday. Preparations. Website, Logo

## 2023/11/14 Tuesday

Forbes Tech Summit on Thursday. Preparations. Website, Logo

## 2023/11/13 Monday

### 76. Coding challenge

    document.querySelector('.again').addEventListener('click', function () {
      score = 20;
      secretNumber = Math.trunc(Math.random() * 20) + 1;
      document.querySelector('.message').textContent = 'No Number';
      document.querySelector('.number').textContent = '?';
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').style.width = '15rem';
      document.querySelector('.guess').value = '';
    });

### 75. Manipulating CSS style

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('number').style.width = '30rem';

### 74. Implementing the Game Logic

    'use strict';
    const secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.check').addEventListener('click', function () {
      const guess = Number(document.querySelector('.guess').value);
      console.log(guess, typeof guess);
      console.log(secretNumber, typeof secretNumber);
      if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
      } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';
     } else if (guess > secretNumber) {
       document.querySelector('.message').textContent = 'Too High!';
      } else if (guess < secretNumber) {
       document.querySelector('.message').textContent = 'Too Low!';
      }
    });

Project Work - Mechanical Engineering

## 2023/11/12 Sunday

Family time

## 2023/11/11 Saturday

Family time

## 2023/11/10 Friday

Project Work - Mechanical Engineering
<<<<<<< HEAD

## 2023/11/09 Thursday

Project Work - Mechanical Engineering

## 2023/11/08 Wednesday

Project Work - Mechanical Engineering

## 2023/11/07 Tuesday

=======

## 2023/11/08 Wednesday

Project work - Mechanical Engineering

> > > > > > > 5142880c2dde6d169a89d36581d9a68da9b16cb6

Formatting

      Input String:     %132,5/a13tr5H6

      ------ Input Decoding ------

      String is OK:     Max   char: 18
                        Input char: 15
      Original string:  %132,5/a13tr5H6
      New string:       132.5a13tr5H6
      Dimension is:     132.5 mm
      Shaft tolerance:  a13
      Hole  tolerance:  H6



      ---- Output Calculation ----

      Input Dimension: 132.5 mm
      Input Tolerance: a13 ->  Shaft
      Column: 12,      Row: 3
      Deviation:       Max: -1090 um,
                       Min: -460 um
                       Abs: 630 um
      Tolerance zone:  Max: 131.410 mm
                       Min: 132.040 mm

      Input Dimension: 132.5 mm
      Input Tolerance: H6 ->  Hole
      Column: 11,      Row: 27
      Deviation:       Max: 0 um,
                       Min: 25 um
                       Abs: 25 um
      Tolerance zone:  Max: 132.500 mm
                       Min: 132.525 mm

      [Done] exited with code=0 in 0.287 seconds

## 2023/11/07 Tuesday

### JavaScript Complete Course

### 73 Handling Click Eventss

. is the class selector

    document.querySelector('.check').addEventListener('click', function () {
      const guess = document.querySelector('.guess').value;
      console.log(guess, typeof guess);
      if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
      }
    });

#### 72 Selecting and Manipulating Elements

    'use strict';
    console.log(document.querySelector('.message').textContent);
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = 13;
    document.querySelector('.score').textContent = 10;
    console.log(document.querySelector('.guess').value);
    document.querySelector('.guess').value = 23;

### 71 What's the DOM and DOM Manipulation

DOM: Document Object Model
Structured representation of HTML focuments
Allpws JS to access html elements and styles to manipulat them.

JS is the dialect of the ECMA Script.
JS in the browser

DOM and DOM methods are part of the WEB API s. we can access these APIs with JS.

API are written in JS are ready to be interacted with.

### 70. PROJECT #1: Guess My Number!

    'use strict';
    console.log(document.querySelector('.message').textContent);

### Engineering Fit program

Merging the String Checking and the Loookup table programs.
Went without a problem! Awesome!

Reformatting the merged output:

    Input String:     %132,5/a13tr5H6

    ------ Input Decoding ------

    String is OK:     Max   char: 18
                      Input char: 15
    Original string:  %132,5/a13tr5H6
    New string:       132.5a13tr5H6
    Dimension is:     132.5 mm
    Shaft tolerance:  a13
    Hole  tolerance:  H6



    ---- Output Calculation ----

    Input Dimension: 132.5 mm
    Input Tolerance: a13 ->  Shaft
    Column: 12, Row: 3

    Deviation:       Max: -1090 um,
                     Min: -460 um
                     Abs: 630 um

    Tolerance zone:  Max: 131.410 mm
                     Min: 132.040 mm

    Input Dimension: 132.5 mm
    Input Tolerance: H6 ->  Hole
    Column: 11, Row: 27

    Deviation:       Max: 0 um,
                     Min: 25 um
                     Abs: 25 um

    Tolerance zone:  Max: 132.500 mm
                     Min: 132.525 mm

    [Done] exited with code=0 in 0.311 seconds

## 2023/11/06 Monday

### Reformatting the getTolShaft Function so code is DRY

    function getTolShaft2(stringInput, TolType) {
      //TolType: hole or shaft
      let TolTypeString = '';
      if (TolType === 'hole') {
        substrings = toleranceListHole;
        TolTypeString = 'Hole ';
      } else if (TolType === 'shaft') {
        substrings = toleranceListShaft;
        TolTypeString = 'Shaft';
      }

      const foundSubstrings = [];
      for (const substring of substrings) {
        if (stringInput.includes(substring)) {
          foundSubstrings.push(substring);
        }
      }
      if (foundSubstrings[0] === null || foundSubstrings[0] ===     undefined || foundSubstrings[0] === '') {
        console.error(`${TolTypeString} tolerance:  None`);
      } else {
        console.log(`${TolTypeString} tolerance:  ${foundSubstrings[0]}`);
        return foundSubstrings[0];
      }
    }

So the functions search for th relevant lookup string array.

    Instead of this:
    //output.shaftTol = getTolShaft(Dim.ToleranceString, toleranceListShaft);
    //output.holeTol = getTolShaft(Dim.ToleranceString, toleranceListHole);

    this:
    output.holeTol = getTolShaft2(Dim.ToleranceString, 'shaft');
    output.holeTol = getTolShaft2(Dim.ToleranceString, 'hole');

RESULT IS:

    Input String:     123,5 H6
    String is OK: Max char: 18 Input length: 8
    Original string:  123,5 H6
    New string:       123.5H6
    Dimenion is:      123.5
    Shaft tolerance:  None
    Hole  tolerance:  H6
    { dimension: 123.5, holeTol: 'H6', shaftTol: 'x1' }

---

Engineering Fitting Program Error checking refactoring, subdividing error checking to a master function with subfunctions

- Is input empty or nil
- Length of input
- removing special characters
- remove spaces
- is the first character a number?
- Extract the dimension from the string

WIP: Extracting a substring which classifies the tolerance

I relied heavily on ChatGPT 3.5 during development. This is pretty awesome. Result output:

In the string: **%12,5/h6tr5H6**
The program automatically found the

- Dimension: 12.5
- hole tolerance: h6
- Shaft toelrance: H6

and Handeld erros.

### Reformatting the Tolerance output:

    Input String:     123,5 H6
    String is OK: Max char: 18 Input length: 8
    Original string:  123,5 H6
    New string:       123.5H6
    Dimenion is:      123.5
    Tolerance 1:      None
    Tolerance 1:      H6
    { dimension: 123.5, holeTol: 'H6', shaftTol: undefined }

### Case 1: Both Hole AND Shaft tolerances

%12,5/h6tr5H6

{ dimension: 12.5, holeTol: 'H6', shaftTol: 'h6' }

    %12,5/h6tr5H6
    String is OK: Max char: 18
    Original string: %12,5/h6tr5H6
    New string: 12.5h6tr5H6
    inputString:12.5h6tr5H6
    first letter position is: 4
    Dimenion is:           12.5
    tolerance string is FN:   h6tr5H6
    foundSubstrings: h6
    foundSubstrings: H6
    Shaft tolerance Main is: h6
    { dimension: 12.5, holeTol: 'H6', shaftTol: 'h6' }

### Case 2: Hole tolerance only

    123,5H6
    String is OK: Max char: 18
    Original string: 123,5H6
    New string: 123.5H6
    inputString:123.5H6
    first letter position is: 5
    Dimenion is:           123.5
    tolerance string is FN:   H6
    There is no Shaft Tolerance present.
    foundSubstrings: H6
    Shaft tolerance Main is: undefined
    { dimension: 123.5, holeTol: 'H6', shaftTol: undefined }

### Case 3: Shaft tolerance only

    12.5g6
    String is OK: Max char: 18
    Original string: 12.5g6
    New string: 12.5g6
    inputString:12.5g6
    first letter position is: 4
    Dimenion is:           12.5
    tolerance string is FN:   g6
    foundSubstrings: g6
    There is no Shaft Tolerance present.
    Shaft tolerance Main is: g6
    { dimension: 12.5, holeTol: undefined, shaftTol: 'g6' }

### Case 4: No tolerances

    36,45
    String is OK: Max char: 18
    Original string: 36,45
    New string: 36.45
    inputString:36.45
    first letter position is: -1
    Dimenion is:           36.4
    tolerance string is FN:   5
    There is no Shaft Tolerance present.
    Shaft tolerance Main is: undefined
    There is no Shaft Tolerance present.
    { dimension: 36.4, holeTol: undefined, shaftTol: undefined }

### Case 5: Empty or Null String

Inpput: ""
{ dimension: 0, holeTol: undefined, shaftTol: undefined }

    String is empty or null.
    String is OK: Max char: 18
    Original string:
    New string:
    inputString:
    first letter position is: -1
    Dimenion is:           0
    tolerance string is FN:
    There is no Shaft Tolerance present.
    There is no Shaft Tolerance present.
    Shaft tolerance Main is: undefined
    { dimension: 0, holeTol: undefined, shaftTol: undefined }

## 2023/11/05 Sunday

Resting

## 2023/11/04 Saturday

Resting

## 2023/11/03 Friday Engineering Fit project

I'm really interested in this project so I'm pausing my course learning process.

## 2023/11/02 Thursday Engineering Fit project

JavaScript structure
https://www.youtube.com/watch?v=exiC1Qsv5mc
namespaces

## 2023/11/01 Wednesday Chrome extension development

JSON

Engineering Fit Scripts

https://platform.openai.com/docs/introduction
Udemy Courses on Chrome Extensions are Baad

## 2023/10/31 Tuesday Debugging, Flutter

Repo renamed

GitHub Clone 2nd repo in new VSC Window

https://www.youtube.com/watch?v=TviP5rCZiy0&ab_channel=TestingAI

### 70. Project: Guess my number

### 60. The Debugging Process

- Identifying
  - During developmetn
  - Testing SW
  - User reports during production
  - Context: browser, users, etc.
- Find
  - Developer console
  - Debugger
- Fix

  - Replace wrong solution with new one
    -Prevent
    -Search for similar bugs
    -writing tests using testing SW

  61. Debugging

      console.log(measurement);
      console.table(measurement);
      console.log(measurement.value);
      console.warn(measurement.value);
      console.error(measurement.value);

Breakpoints

    debugger;

VSC Shortcuts Arjan codes

- https://www.youtube.com/watch?v=dI34jrEtmB0&ab_channel=ArjanCodes

## 2023/10/30 Monday

## 2023/10/29 Sunday Debugging

## 2023/10/28 Saturday HTML, CSS, GIT

### GIT Commit message example:

https://www.youtube.com/watch?v=_gpNPNMYbVY&ab_channel=MonsterlessonsAcademy

### CSS Course 67

CSS Box Model

Each element can be see nas a box. margin, padding, width, haighet, content.

- Content: All the text, images: width, height
- Padding: Around the content
- Border: around the padding
- Margin: Space between the boxes:
- Fill area: Area that gets filled

Some elements get some margin by default

Global reset:

    *{
    margin: 0;
    padding: 0;
    }

Child selector

### HTML

Head is the settings:

Exclamation mark-TAB makes the HTML structure

### Attributes HTML

Describe elements
You can see <a href="https://www.linkedin.com/in/gaborgubicza/">Gabor on LinkedIn</a>
These two can be used everywhere:

- Classes:
- IDs: IDs have to be unique. Can only be used once in the page

  CSS convention: Hyphen. JS convention: camel case: course-image vs courseImage

  DIV is a generic box with no meaning. SEO: Better specific boxes.
  Use appropriate elements: Semantic HTML

### 66. Use CSS to Style elements

Style goes to the head

## 2023/10/27 Friday

## 2023/10/26 Thu

### HTML

Pull from Git repo to the MacBook machine.
Used GitLens

### 60 Bugs

- Identify
  - During development
  - Testing Software
  - User Reports during Production
  - Context: Browsers, users
- Find
  - Developer Console
  - Debugger
- Fix
  - Replace wrong solutions with new correct solution
- Prevent
  - Searching for the same bug in similar code
  - Writing tests using testing software

### 59. Temperature Amplitude, Concat Arrays

Snippets doesn't work. Need to troubleshoot:
cl: console.log();

    "Print to console": {
      "prefix": "cl",
      "scope": "javascript,typescript,javascriptreact",
      "body": ["console.log($1)"],
      "description": "console.log"
    },

Fuck.. Snippet file had a remaining "{" character at the very beginning. It was residual from the copy paste. Snippets work OK now. Problem solved. F YES

59

Temperature meter: Absolute of min, max, error processing

    const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
    }
    console.log(max);
    console.log(min);
    return max - min;
    }  ;
    //calcTempAmplitude([3, 7, 4, 8, 10, 1]);
    const amplitude = calcTempAmplitude(temperatures);
    console.log(amplitude);

Stack Overflow
MDN

Complete, but unofficial documentation of JS

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

    'use strict';
    const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
    const temperatures2 = [13,  -22,  -62,  -12,  'error',  92,  123,  127,  152,  124,  29,  25,];
    const temperatures = temperatures1.concat(temperatures2);
    console.log(temperatures);
    // 1) Understand the problem
    //Temp Amplitude? Max / min diff
    // what's a sensor error - ignore the data
    // 2) Breaking the problem down to smaller pieces
    // - How to ignore errors?
    // - Find max, min value
    const calcTempAmplitude = function (t1, t2) {
    const temps = t1.concat(t2);
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
    }
    console.log(max);
    console.log(min);
    return max - min;
    };
    //calcTempAmplitude([3, 7, 4, 8, 10, 1]);
    const amplitude = calcTempAmplitude(temperatures1, temperatures2);
    console.log(amplitude);

## 2023/10/25 Wed

Project Work

## 2023/10/24 Tue

Project Work

## 2023/10/23 Mon

## **Data Structures**

## **Hoisting in JS**

Makes some type of variables accessible in the code before they are actually declared

To be finished

## **Scoping in practice:**

To be finished

## **Scoping:**

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
