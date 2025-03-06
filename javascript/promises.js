const posts = [
    { title: "Harry Potter", body: "A magician boy who does wonders" },
    { title: "Mowgli", body: "A boy who lives with wolves in the jungle" }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title} - ${post.body}</li>`;
        });
        document.getElementById('postList').innerHTML = output;
    }, 1000);
}

function createPost() {
    const title = document.getElementById('title').value.trim();
    const body = document.getElementById('body').value.trim();

    if (title === "" || body === "") {
        alert("Please enter both title and body!");
        return;
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ title, body });

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject("Error: Something went wrong");
            }
        }, 2000);
    })
    .then(getPosts)
    .catch(err => console.error(err));
}
// Initial rendering of posts
getPosts();
