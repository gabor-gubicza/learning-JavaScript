'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem

//Temp Amplitude? Max / min diff
// what's a sensor error - ignore the data

// 2) Breaking the problem down to smaller pieces
// - How to ignore errors?
// - Find max, min value

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};
calcTempAmplitude([3, 7, 4]);
console.log(object);
