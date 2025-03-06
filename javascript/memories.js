
// Cookie Functions
function setCookie() {
    let name = document.getElementById('nameInput').value;
    document.cookie = `username=${name}; path=/; max-age=60`; // Cookie expires in 60 seconds
    alert("Cookie Set!");
}

function getCookie() {
    let cookies = document.cookie.split('; ');
    let cookieData = cookies.find(row => row.startsWith('username='));
    if (cookieData) {
        document.getElementById('cookieOutput').innerText = "Cookie Value: " + cookieData.split('=')[1];
    } else {
        document.getElementById('cookieOutput').innerText = "No cookie found.";
    }
}

function deleteCookie() {
    document.cookie = "username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    alert("Cookie Deleted!");
}

// Local Storage Functions
function setLocalStorage() {
    let name = document.getElementById('nameInput').value;
    localStorage.setItem('username', name);
    alert("Local Storage Set!");
}

function getLocalStorage() {
    let name = localStorage.getItem('username');
    document.getElementById('localStorageOutput').innerText = name ? "Local Storage Value: " + name : "No data in Local Storage.";
}

function clearLocalStorage() {
    localStorage.removeItem('username');
    alert("Local Storage Cleared!");
}

// Session Storage Functions
function setSessionStorage() {
    let name = document.getElementById('nameInput').value;
    sessionStorage.setItem('username', name);
    alert("Session Storage Set!");
}

function getSessionStorage() {
    let name = sessionStorage.getItem('username');
    document.getElementById('sessionStorageOutput').innerText = name ? "Session Storage Value: " + name : "No data in Session Storage.";
}

function clearSessionStorage() {
    sessionStorage.removeItem('username');
    alert("Session Storage Cleared!");
}
