const post = [
    { title: "harry potter", body: "a magician boy who do wonders" },
    { title: "mowgli", body: "a boy who lives with wolves in jungle" }
];

function getPosts() {
    setTimeout(() => {
        let output = ``;
        post.forEach((post, index) => output += `<li>${post.title} is ${post.body}</li>`);
        document.getElementById('postList').innerHTML = output; 
    }, 3000);
}

getPosts();

function createPost() {
    var t = document.getElementById('title').value;
    var b = document.getElementById('body').value;

    setTimeout(() => {
        post.push({ title: t, body: b });
        getPosts(); 
    }, 2000);
}
