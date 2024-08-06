"use strict";

const container = document.querySelector(".container");
container.addEventListener("mouseover", colorIn);
const squaresPerSide = 16;

for (let i=0; i<squaresPerSide; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j=0; j<squaresPerSide; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
    }
    container.appendChild(row);
}

function colorIn(event) {
    const square = event.target;
    square.style.backgroundColor = "black";
}