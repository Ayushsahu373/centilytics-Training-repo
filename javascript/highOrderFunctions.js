// Higher-Order Function Example: Function taking another function as an argument
function greet(name, callback) {
    console.log("Hello " + name + "!");
    callback(); // Executing the callback function
}

function sayGoodbye() {
    console.log("Bye bye");
}

// Calling the function with a callback
greet("Ayush", sayGoodbye);


// Higher-Order Function Example: Function returning another function
function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}

const double = multiplier(2);  // Returns a function that doubles a number
console.log(double(5)); // Output: 10


// ============================================
// Built-in Higher-Order Functions in JavaScript
// ============================================
const numbers = [1, 2, 3, 4, 5];

// map: Multiply each number by 2
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// filter: Get even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]

// reduce: Sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// find: Find the first number greater than 3
const firstLarge = numbers.find(num => num > 3);
console.log(firstLarge); // Output: 4

// findIndex: Get the index of the first even number
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // Output: 1

// some: Check if at least one number is greater than 4
const hasLargeNumber = numbers.some(num => num > 4);
console.log(hasLargeNumber); // Output: true

// every: Check if all numbers are greater than 0
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // Output: true

// sort: Sort numbers in descending order
const sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log(sortedNumbers); // Output: [5, 4, 3, 2, 1]

// reverse: Reverse the numbers array
const reversedNumbers = [...numbers].reverse();
console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]

// flat: Flatten a nested array
const nestedArray = [1, [2, [3, 4]]];
console.log(nestedArray.flat(2)); // Output: [1, 2, 3, 4]

// flatMap: Double each number and flatten
const flatMapped = numbers.flatMap(num => [num, num * 2]);
console.log(flatMapped); // Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]


// ============================================
// Asynchronous Higher-Order Functions
// ============================================

// setTimeout: Run function after a delay
setTimeout(() => {
    console.log("Hello after 2 seconds!");
}, 2000);

// setInterval: Run function repeatedly every second
let count = 0;
const interval = setInterval(() => {
    console.log("Count: " + count++);
    if (count > 5) clearInterval(interval); // Stop after 5
}, 1000);

// fetch API (Promise-based HOF for handling async requests)
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log("Fetched Data:", data))
    .catch(error => console.log("Error:", error));
