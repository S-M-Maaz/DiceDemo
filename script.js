"use script";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add("hidden");
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
let diceEl = document.querySelector(".dice");
const rollDice = document.querySelector(".btn--roll");
score0El.textContent = 0;
score1El.textContent = 0;

rollDice.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6 + 1);

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    const player1 = document.querySelector("player--1");

    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
