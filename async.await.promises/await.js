async function main() {
    try {
        console.log("Fetching user...");

        let userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let user = await userResponse.json();
        console.log("User Details:", user);

        console.log("Fetching posts...");
        let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        let posts = await postsResponse.json();
        console.log("User Posts:", posts);

    } catch (error) {
        console.log("Error:", error);
    }
}

// Call the async function
main();
