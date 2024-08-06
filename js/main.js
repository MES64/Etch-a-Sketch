"use strict";

const container = document.querySelector(".container");
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