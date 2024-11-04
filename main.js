/* ---------------- 1 --------------- */

//Create a function which returns the number of true values there are in an array.

function countTrue(array) {
  count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      count++;
    }
  }
  console.log(count);
}

countTrue([true, false, false, true, false]); // ➞ 2
countTrue([false, false, false, false]); // ➞ 0
countTrue([]); // ➞ 0

/* ---------------- 2 --------------- */
// The right shift operation is similar to floor division by powers of two. Sample calculation using the right shift operator ( >> ):

/*
80 >> 3 = floor(80/2^3) = floor(80/8) = 10
-24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
-5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
*/

function shiftToRight(num, power) {
  if (power === 0) return num;
  else {
    return shiftToRight(num / 2, power - 1);
  }
}

console.log(shiftToRight(80, 3)); //➞ 10

console.log(shiftToRight(-24, 2)); //➞ -6

console.log(shiftToRight(-5, 1)); //➞ -3

console.log(shiftToRight(4666, 6)); //➞ 72

console.log(shiftToRight(3777, 6)); //➞ 59

console.log(shiftToRight(-512, 10)); //➞ -1

/* ---------------- 3 --------------- */
//Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

function num_of_digits(number) {
  let result = 0;
  do {
    number = number / 10;
    result++;
  } while (number >= 1);
  return result;
}

console.log(num_of_digits(1000)); // ➞ 4

console.log(num_of_digits(12)); // ➞ 2

console.log(num_of_digits(1305981031)); // ➞ 10

console.log(num_of_digits(0)); //➞ 1

/* ---------------- 4 --------------- */
//Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

function numberSquares(number) {
  if (number === 0) return 0;
  else {
    return number ** 2 + numberSquares(number - 1);
  }
}

console.log(numberSquares(2)); // ➞ 5

console.log(numberSquares(4)); // ➞ 30

console.log(numberSquares(5)); // ➞ 55

/* ---------------- 5 --------------- */
//Sum of Resistance in Series Circuits

function seriesResistance(array) {
  result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}

console.log(seriesResistance([1, 5, 6, 3])); // ➞ "15 ohms"

console.log(seriesResistance([16, 3.5, 6])); // ➞ "25.5 ohms"

console.log(seriesResistance([0.5, 0.5])); // ➞ "1.0 ohm"

/* ---------------- 6 --------------- */
//Add up the Numbers from a Single Number

function addUp(number) {
  if (number === 0) return 0;
  else {
    return number + addUp(number - 1);
  }
}

console.log(addUp(4)); // ➞ 10

console.log(addUp(13)); // ➞ 91

console.log(addUp(600)); // ➞ 180300

/* ---------------- 7 --------------- */
// Find the Smallest and Biggest Numbers

function minMax(arrayToSort) {
  for (i = 0; i < arrayToSort.length; i++) {
    for (j = 0; j < arrayToSort.length - 1 - i; j++) {
      if (arrayToSort[j] > arrayToSort[j + 1]) {
        let tempVar = arrayToSort[j];
        arrayToSort[j] = arrayToSort[j + 1];
        arrayToSort[j + 1] = tempVar;
      }
    }
  }
  console.log([arrayToSort[0], arrayToSort[arrayToSort.length - 1]]);
}

minMax([1, 2, 3, 4, 5]); // ➞ [1, 5]

minMax([2334454, 5]); // ➞ [5, 2334454]

minMax([1]); // ➞ [1, 1]

/* ---------------- 8 --------------- */
//Count Instances of a Character in a String

function charCount(letter, [...string]) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (letter === string[i]) {
      count++;
    }
  }
  return count;
}

console.log(charCount("a", "edabit")); // ➞ 1

console.log(charCount("c", "Chamber of secrets")); // ➞ 1

console.log(charCount("b", "big fat bubble")); // ➞ 4

/* ---------------- 9 --------------- */
//Convert Hours into Seconds

function howManySeconds(number) {
  return number * 3600;
}

console.log(howManySeconds(2)); // ➞ 7200

console.log(howManySeconds(10)); // ➞ 36000

console.log(howManySeconds(24)); // ➞ 86400

/* --------------- 10 --------------- */
//Sum of Cubes

function sumOfCubes(array) {
  result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i] ** 3;
  }
  return result;
}

console.log(sumOfCubes([1, 5, 9])); // ➞ 855
console.log(sumOfCubes([3, 4, 5])); // ➞ 216
console.log(sumOfCubes([2])); // ➞ 8
console.log(sumOfCubes([])); // ➞ 0

/* --------------- 11 --------------- */
//Filter out Strings from an Array

function filterArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

console.log(filterArray([1, 2, "a", "b"])); // ➞ [1, 2]

console.log(filterArray([1, "a", "b", 0, 15])); // ➞ [1, 0, 15]

console.log(filterArray([1, 2, "aasf", "1", "123", 123])); // ➞ [1, 2, 123]

/* --------------- 12 --------------- */
//Array of Multiples

function arrayOfMultiples(multiple, quantity) {
  let resultArray = [];
  for (let i = 0; i < quantity; i++) {
    resultArray.push(multiple * (i + 1));
  }
  return resultArray
}

console.log(arrayOfMultiples(7, 5)); // ➞ [7, 14, 21, 28, 35]

console.log(arrayOfMultiples(12, 10)); // ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

console.log(arrayOfMultiples(17, 6)); // ➞ [17, 34, 51, 68, 85, 102]

/* --------------- 13 --------------- */