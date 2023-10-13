
function calcAge1(birthYear){
return 2037-birthYear;
}
const age1 = calcAge1(1991);


const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}




const calcAge3 = birthYear => 2037 - birthYear
//Return will happen implicitly. Good for one liner functions
// One parameter
const age3 = calcAge3(1991);


//
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Jonas'));