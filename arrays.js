/* Task 1: Adding and Removing Elements

Create an array containing some initial elements.
Use the push method to add a new element to the end of the array.
Use the pop method to remove the last element from the array. */


let fruits = ['apple', 'banana', 'orange'];

const withKiwi = fruits.push("kiwi");

console.log(withKiwi);


const popKiwi = fruits.pop();

console.log(popKiwi);


/* Task 2: Sorting Arrays

Create an array of numbers in random order.
Use the sort method to sort the array in ascending order.
let numbers = [3, 1, 5, 2, 4]; */

let numbers2 = [3, 1, 5, 2, 4];

const sortedArray = numbers2.sort();

console.log(sortedArray);


/* Task 3: Applying Array Methods

Create an array of numbers.
Use the map method to double each number in the array.
Use the filter method to filter out even numbers from the array.
Use the reduce method to calculate the sum of all numbers in the array. */


let numbers = [3, 1, 5, 2, 4];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers)

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  console.log(sum);

