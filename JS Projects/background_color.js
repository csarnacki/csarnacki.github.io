const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ["red", "orange", "yellow","green", "blue", "indigo", "violet"];

body.style.backgroundColor = "white";
button.addEventListener('click', changeBackground);

function changeBackground() {
    const colorValues = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorValues];
}