'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number!!👏👏';

console.log(document.querySelector('.message').textContent);

document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').textContent);
document.querySelector('.score').textContent = 4;
 */
/////////////////////////////////////////////////

// testing function :
// const check = function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);
// };
//////////////////////////////////////////////////////////////

// let's implement the logic of the game :

let generatNmber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let secretNumber = generatNmber();
let score = 20;
let highscore = 0;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //   console.log(guess);
  if (score !== 0) {
    if (!guess) {
      alert('Please enter a valid input (a number between 1 & 20 !!');
    } else {
      // compare user guessed value with random generated one:
      if (guess !== secretNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        if (secretNumber > guess) {
          document.querySelector('.message').textContent = '📉 too low !';
        } else if (secretNumber < guess) {
          document.querySelector('.message').textContent = '📈 too high !';
        }
      } else {
        document.querySelector('.message').textContent = '👏 correct number';
        document.querySelector('.number').textContent = guess;

        if (score > highscore) {
          document.querySelector('.highscore').textContent = score;
          highscore = score;
        }

        // css
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
      }
    }
  } else {
    document.querySelector('.message').textContent =
      '🤦‍♂️ you loose the game, try again !';
    //css
    document.querySelector('body').style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'start guessing ...';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  secretNumber = generatNmber();

  // css
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
