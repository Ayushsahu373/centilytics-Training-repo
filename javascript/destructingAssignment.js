// Basic Object Destructuring
const user = { name: "Alice", age: 25, country: "USA" };
const { name, age, country } = user;
console.log(name);   // "Alice"
console.log(age);    // 25
console.log(country); // "USA"

// Assigning to New Variable Names
const user2 = { name: "Alice", age: 25 };
const { name: userName, age: userAge } = user2;
console.log(userName); // "Alice"
console.log(userAge);  // 25

// Setting Default Values
const user3 = { name: "Bob", age: 30 };
const { name: uName, age: uAge, city = "Unknown" } = user3;
console.log(uName); // "Bob"
console.log(uAge);  // 30
console.log(city);  // "Unknown"

// Nested Object Destructuring
const person = {
    name: "Charlie",
    address: { city: "New York", zip: "10001" }
};
const { name: pName, address: { city: pCity, zip: pZip } } = person;
console.log(pName); // "Charlie"
console.log(pCity); // "New York"
console.log(pZip);  // "10001"

// Destructuring in Function Parameters
const displayUser = ({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
};
const user4 = { name: "David", age: 22 };
displayUser(user4); // "Name: David, Age: 22"
