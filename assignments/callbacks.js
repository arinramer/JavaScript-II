// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

//Problem 1

function getLength(arr, cb) {
  return cb(arr.length);
}

function callback(item) {
  return item;
}

const length = getLength(items, callback);
console.log(length);

//Problem 2

function getLast(arr, cb) {
  return cb(arr[3]);
}

const last = getLast(items, callback);
console.log(last);

//Problem 3

function sumNums(x, y, cb) {
  return cb(x + y);
}

const sum = sumNums(4, 3, callback);
console.log(sum);

//Problem 4

function multiplyNums(x, y, cb) {
  return cb(x * y);
}

const multiply = multiplyNums(4, 3, callback);
console.log(multiply);

//Problem 5

function contains(item, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item.includes(item));
}

const present = contains('Gum', callback);
console.log(present);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
