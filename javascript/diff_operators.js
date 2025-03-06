const sumAll = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
console.log(sumAll(10, 20));       // Output: 30
