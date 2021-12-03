'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
// console.log(typeof score, '<---- ');

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'correct number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.label-score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.label-score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.label-score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOU LOST THE GAME';
      document.querySelector('.label-score').textContent = 0;
    }
  }
});
