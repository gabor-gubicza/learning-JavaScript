
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
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven', 'Gabor', 'Curtis'],
    hasDriversLicense: false,

    /*calcAge: function(birthYear){       // We need Function expression here
        return 2037-birthYear;
    }   */
    /*calcAge: function() {       // We need Function expression here
        //console.log(this);
        return 2037 - this.birthYear;
    } **/

    calcAge: function() {  
        this.age=2037-this.birthYear;
        return this.age;
    } ,

    //Jonas is a 50 year old teacher and he has "a" driving license
    getInfo: function() {
        //this.info = (`${this.firstName} is a ${this.age} year old ${this.job} who a Mark's BMI is larger ${BMIMark}`);
        return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers License.`;


    }


};
//Any Function attached to an object is a method


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

//console.log(jonas.calcAge(1991));       
//console.log(jonas['calcAge'](1991));  
console.log(jonas.calcAge());     
console.log(jonas.age); 
console.log(jonas.getInfo()); 

//this is a special variable