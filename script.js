'use strict';

//// generating a secret number from 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

//// high score
let score = 20;

//// even listner for listening on click the .check btn
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //// when ther's not input number from player
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
    //// when player's guess is correct and wins
  } else if (guess === secretNumber) {
    //// changing the text content of .number to secret number
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.message').textContent = 'correct number';
    //// change background color when guess is correct
    document.querySelector('body').style.backgroundColor = '#60b347';
    //// change width to 30rem
    document.querySelector('.number').style.width = '30rem';
    //// when input number is greater then secret number
  } else if (guess > secretNumber) {
    //// when score is greater then 1
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.label-score').textContent = score;
      //// when score is less then 1
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.label-score').textContent = 0;
    }
    //// when input number is less then secret number
  } else if (guess < secretNumber) {
    //// when score is greater then 1
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.label-score').textContent = score;
      //// when score is less then 1
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.label-score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';

  //   console.log(secretNumber, '<---- new');
  document.querySelector('.label-score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  //// change background color when guess is correct
  document.querySelector('body').style.backgroundColor = '#222';
  //// change width to 30rem
  document.querySelector('.number').style.width = '15rem';
});
