'use strict';

const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');
const nameOne = document.getElementById('name--0');
const nameTwo = document.getElementById('name--1');
const inpNameOne = document.querySelector('.inpname--0');
const inpNameTwo = document.querySelector('.inpname--1');
const scoreOne = document.getElementById('score--0');
const scoreTwo = document.getElementById('score--1');
const newButton = document.querySelector('.btn--new');

//Initializing Values With Zeroes
let playerOneScore = 0;
let playerTwoScore = 0;

//Switch Player
const switchPlayer = function (firstPlayer, secondPlayer) {
  firstPlayer.classList.add('player--active');
  secondPlayer.classList.remove('player--active');
};

//High Scores
const highScore = function () {
  if (playerOneScore == playerTwoScore)
    return [playerOne, playerTwo].forEach(el =>
      el.classList.remove('player--active')
    );

  playerOneScore > playerTwoScore
    ? switchPlayer(playerOne, playerTwo)
    : switchPlayer(playerTwo, playerOne);
};

const init = function () {
  playerOneScore = playerTwoScore = 0;
  scoreOne.textContent = scoreTwo.textContent = 0;
  console.log(playerOneScore, playerTwoScore);
  highScore();
};
init();

//Event Listners
newButton.addEventListener('click', init);

let clickedTarget;

playerOne.addEventListener('click', function (e) {
  clickedTarget = e.target.closest('.inpname');
  if (clickedTarget) return;
  scoreOne.textContent = ++playerOneScore;
  highScore();
});

playerTwo.addEventListener('click', function (e) {
  clickedTarget = e.target.closest('.inpname');
  if (clickedTarget) return;
  scoreTwo.textContent = ++playerTwoScore;
  highScore();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    nameOne.textContent = inpNameOne.value;
    nameTwo.textContent = inpNameTwo.value;
  }
});
