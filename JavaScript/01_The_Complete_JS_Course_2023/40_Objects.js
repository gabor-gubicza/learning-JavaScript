
const jonasArray = [
    'Jonas',
    'Schmidt',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];


const jonas = {         //Object litteral syntax
    firstName: 'Jonas',
    lastName: 'Schmidt',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven', 'Gabor', 'Curtis']
};

console.log(jonas);             
console.log(jonas.lastName);    
console.log(jonas['lastName']);     //Can be an expression here

const nameKey = 'Name';
console.log(jonas['first'+ nameKey]);     //Can be an expression here
console.log(jonas['last'+ nameKey]);     //



//Jonas has 3 friends, and his best friend is called Michael
const challengeJonas = jonas.firstName;
console.log(jonas.firstName + ' has ' + jonas.friends.length +' friends, and his best friend is called ' + jonas.friends[0]);     //

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);     //
