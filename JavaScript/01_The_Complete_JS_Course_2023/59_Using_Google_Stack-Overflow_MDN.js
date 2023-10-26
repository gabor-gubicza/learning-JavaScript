'use strict';

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const temperatures2 = [
  13,
  -22,
  -62,
  -12,
  'error',
  92,
  123,
  127,
  152,
  124,
  29,
  25,
];

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

// how to merge two arrays?
