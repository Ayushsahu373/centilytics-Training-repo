// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
});

// Click Event
document.getElementById("btnClick").addEventListener("click", () => {
    alert("Button Clicked!");
});

// Double Click Event
document.getElementById("btnDoubleClick").addEventListener("dblclick", () => {
    alert("Button Double-Clicked!");
});

// Mouse Over Event
document.getElementById("box").addEventListener("mouseover", () => {
    document.getElementById("box").style.backgroundColor = "lightgreen";
});

// Mouse Out Event
document.getElementById("box").addEventListener("mouseout", () => {
    document.getElementById("box").style.backgroundColor = "lightblue";
});

// Key Down Event
document.addEventListener("keydown", (event) => {
    console.log(`Key Down: ${event.key}`);
});

// Key Up Event
document.addEventListener("keyup", (event) => {
    console.log(`Key Up: ${event.key}`);
});

// Input Event
document.getElementById("inputField").addEventListener("input", (event) => {
    console.log(`Input Value: ${event.target.value}`);
});

// Change Event
document.getElementById("selectBox").addEventListener("change", (event) => {
    console.log(`Selected Value: ${event.target.value}`);
});

// Submit Event
document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form Submitted!");
});

// Focus Event
document.getElementById("inputField").addEventListener("focus", () => {
    console.log("Input Field Focused");
});

// Blur Event
document.getElementById("inputField").addEventListener("blur", () => {
    console.log("Input Field Blurred");
});

// Resize Event
window.addEventListener("resize", () => {
    console.log("Window Resized");
});

// Scroll Event
window.addEventListener("scroll", () => {
    console.log("Page Scrolled");
});

// Context Menu (Right Click) Event
document.getElementById("box").addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("Right Click Detected!");
});

// Mouse Down Event
document.getElementById("box").addEventListener("mousedown", () => {
    console.log("Mouse Down on Box");
});

// Mouse Up Event
document.getElementById("box").addEventListener("mouseup", () => {
    console.log("Mouse Up on Box");
});

// Drag Start Event
document.getElementById("dragItem").addEventListener("dragstart", () => {
    console.log("Drag Started");
});

// Drop Event
document.getElementById("dropZone").addEventListener("drop", (event) => {
    event.preventDefault();
    console.log("Item Dropped");
});

// Drag Over Event
document.getElementById("dropZone").addEventListener("dragover", (event) => {
    event.preventDefault();
    console.log("Dragging Over Drop Zone");
});

