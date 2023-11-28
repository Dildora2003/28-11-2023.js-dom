"use strict";

//////////////////  DOM \\\\\\\\\\\\\\\\\\\\\

const h1 = document.querySelector("h1");

const DecrementBtn = document.querySelector(".btn1");
const IncrementBtn = document.querySelector(".btn2");
const DecreaseBtn = document.querySelector(".btn3");
const IncreaseBtn = document.querySelector(".btn4");
const ClearBtn = document.querySelector(".btn5");

DecrementBtn.addEventListener("click", () => {
  h1.textContent = +h1.textContent - 1;
});

IncrementBtn.addEventListener("click", () => {
  h1.textContent = +h1.textContent + 1;
});

DecreaseBtn.addEventListener("click", () => {
  h1.textContent = +h1.textContent - 5;
});

IncreaseBtn.addEventListener("click", () => {
  h1.textContent = +h1.textContent + 7;
});

ClearBtn.addEventListener("click", () => {
  h1.textContent = 0;
});
