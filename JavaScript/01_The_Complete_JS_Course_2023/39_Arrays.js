const friend1 = 'Michael';
const friend2 = 'Tony';
const friend3 = 'Michelle';

const friends = ['Michael', 'Tony', 'Michelle', 'Tony'];

friends.push('Jay');
friends.unshift('Bob');
friends.pop();      //Remove the last element   -   Returns the removed element
friends.shift();    //Remove the first elemetn  -   Returns the removed element

const years = [1980, 1990, 1526, 1800, 2010];

console.log(friends);
console.log(friends.indexOf('Tony'));
console.log(friends.includes('Bob'));

