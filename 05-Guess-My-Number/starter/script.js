'use strict';
// document.querySelector('.check').addEventListener('click', function(){
//     //console.log('value == ',document.querySelector('.guess').value)
// })

// math.trunc remove dec numbers

//defaults vars
let score = 20;
let number = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
console.log(highscore);
document.querySelector('.number').textContent = '?';
document.querySelector('.number').style.Display = 'none';

//reset function
function reset() {
  document.querySelector('.highscore').textContent = highscore;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing...';
}

document.querySelector('.again').addEventListener('click', function () {
  reset();
  console.log(highscore);
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //document.querySelector('.guess').textContent = '10';
  if (score != 0) {
    if (!guess) {
      document.querySelector('.message').textContent = 'Enter a Number';
    } else if (guess === number) {
      document.querySelector('.message').textContent =
        'You guessed the number !!!';
      if (score > highscore) {
        highscore = score;
        console.log('new high score ', score);
        document.querySelector('.highscore').textContent = score;
      }
      console.log(highscore);
      document.querySelector('.number').textContent = number;
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
    } else if (guess < number) {
      score--;
      document.querySelector('.message').textContent = 'Too Low  !!!';
      document.querySelector('.score').textContent = score;
    } else if (guess > number) {
      score--;
      document.querySelector('.message').textContent = 'Too High  !!!';
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'Looooooooser ';
  }
});
