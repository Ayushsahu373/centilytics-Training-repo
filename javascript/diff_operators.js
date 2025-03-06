//rest operator

const sumAll = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
console.log(sumAll(10, 20));       // Output: 30

// Splitting an Array
const [first, second, ...remaining] = [10, 20, 30, 40, 50];
console.log(first);     // 10
console.log(second);    // 20
console.log(remaining); // [30, 40, 50]

//Rest Operator in Object Destructuring
const user = { name: "John", age: 25, country: "USA", role: "Developer" };

const { name, ...details } = user;
console.log(user.name);    // "John"
console.log(details); // { age: 25, country: "USA", role: "Developer" }


//diff b/w rest and spred 
// Using Rest (collecting values)
const combine = (first, ...rest) => {
    console.log(first);  // First element
    console.log(rest);   // Remaining elements in an array
};
combine(1, 2, 3, 4); // Output: 1, [2, 3, 4]

// Using Spread (expanding values)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
merged2=[arr1,arr2];

console.log(merged);
console.log(merged2);
