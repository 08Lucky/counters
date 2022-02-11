// first take 3 buttons and set initial value in h1
// click on inc button to increment the value
// click on dec button to decrement the value
// click on reset button goes to initial value

// select initial value

let h1 = document.querySelector("h1");

// button selector
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let reset = document.querySelector(".reset");

// select mouse movement
let movement = document.querySelector(".movement");
let first = document.querySelector(".list1");
let second = document.querySelector(".list2");
let third = document.querySelector(".list3");
let fourth = document.querySelector(".list4");
let input = document.querySelector("input")

// Event listeners
let count = 0;

input.onclick = function(event) {
    console.log(event.target.value)
    event.target.value = "lucky"
    event.target.style.backgroundColor = "purple"
}

function incHandler() {
    count = count + 1;
    h1.textContent = count;
}

function decHandler() {
    count = count - 1;
    h1.textContent = count;
}

function resetHandler() {
    count = 0;
    h1.textContent = count;
}

function mouseMoveHandler() {
    first.textContent = event.screenX;
    second.innerText = event.screenY;
    third.innerText = event.clientX;
    fourth.innerText = event.clientY;
}

inc.addEventListener("click", incHandler);
dec.addEventListener("click", decHandler);
reset.addEventListener("click", resetHandler);
movement.addEventListener("mousemove", mouseMoveHandler);