'use strict';

//// generating a secret number from 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

//// high score
let score = 20;
let highScore = 0;

// let messageQuery = document.querySelector('.message');
let numberQuery = document.querySelector('.number');
let scoreQuery = document.querySelector('.score');
let guessQuery = document.querySelector('.guess');
let bodyQuery = document.querySelector('body');
let highScoreQuery = document.querySelector('.highscore');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//// even listner for listening on click the .check btn
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessQuery.value);
  //// when there's not input number from player
  if (!guess) {
    displayMessage('No Number');
    //// when player's guess is correct and wins
  } else if (guess === secretNumber) {
    //// changing the text content of .number to secret number
    numberQuery.textContent = secretNumber;

    displayMessage('Correct Number');
    //// change background color when guess is correct
    bodyQuery.style.backgroundColor = '#60b347';
    //// change width to 30rem
    numberQuery.style.width = '30rem';

    //// keeping track of the highScore and adjusting it
    if (score > highScore) {
      highScore = score;
      highScoreQuery.textContent = highScore;
    }
    //// else if the guess is not equal to secretNumber
  } else if (guess !== secretNumber) {
    //// when score is greater then 1
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      scoreQuery.textContent = score;
      //// when score is less then 1
    } else {
      //   messageQuery.textContent = 'YOU LOST THE GAME';
      displayMessage('YOU LOST THE GAME');
      scoreQuery.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //   messageQuery.textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  //   console.log(secretNumber, '<---- new');
  scoreQuery.textContent = score;

  numberQuery.textContent = '?';

  guessQuery.value = '';
  //// change background color when guess is correct
  bodyQuery.style.backgroundColor = '#222';
  //// change width to 30rem
  numberQuery.style.width = '15rem';
});
