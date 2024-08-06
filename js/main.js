"use strict";

const container = document.querySelector(".container");
container.addEventListener("mouseover", colorIn);

const newGridBtn = document.querySelector(".btn-new-grid");
newGridBtn.addEventListener("click", getUserInput);

createGrid(16);

function createGrid(squaresPerSide) {
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
}

function colorIn(event) {
    const square = event.target;
    square.style.backgroundColor = `rgb(${random(256)}, ${random(256)}, ${random(256)})`;
}

function random(num) {
    return Math.floor(Math.random() * num);
}

function getUserInput() {
    const squaresPerSide = +prompt(
        "Please enter the integer number of squares for the new grid from 1 to 100", "16"
    );
    if (!Number.isInteger(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
        alert("Abort: Input must be an integer between 1 and 100");
        return;
    }
    
    container.innerHTML = "";
    createGrid(squaresPerSide);
}