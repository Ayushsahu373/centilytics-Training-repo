// Async function to fetch user data
async function fetchUser() {
    console.log("Fetching user...");
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return await response.json();
}

// Async function to fetch user posts
async function fetchPosts(userId) {
    console.log("Fetching posts...");
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    return await response.json();
}

// Async function that calls other async functions
async function main() {
    try {
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
