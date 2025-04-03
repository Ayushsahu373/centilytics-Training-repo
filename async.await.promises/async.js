// Async function that returns a message
async function getMessage() {
    return "Hello, this is an async function!";
}

// Async function that simulates fetching user data
async function fetchUser() {
    console.log("Fetching user...");
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user = await response.json();
    return user;
}

// Async function that simulates fetching posts for a user
async function fetchPosts(userId) {
    console.log("Fetching posts...");
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    let posts = await response.json();
    return posts;
}

// Main async function to execute all tasks
async function main() {
    try {
        let message = await getMessage();
        console.log(message);

        let user = await fetchUser();
        console.log("User Details:", user);

        let posts = await fetchPosts(user.id);
        console.log("User Posts:", posts);

    } catch (error) {
        console.log("Error:", error);
    }
}

// Call the main function
main();
