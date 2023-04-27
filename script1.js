"use strict";
const score0El = document.getElementById("score--0");
const btnRoll = document.querySelector(".btn--roll");
const currentScoreEl = document.getElementById("current--0");
let currentScore = 0;
const diceEl = document.querySelector(".dice");

diceEl.classList.add("hidden");
score0El.textContent = 0;

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  currentScore = currentScore + dice;

  currentScoreEl.textContent = currentScore;
});
