"use strict";
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Correct Guess!";
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 19;
// document.querySelector('.guess').value = 20;
let secret_number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secret_number;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        // document.querySelector('.message').textContent = "No Number!";
        displayMessage("No number");

    }
    else if (guess === secret_number) {
        document.querySelector('.number').textContent = secret_number;
        // document.querySelector('.message').textContent = "Correct Guess!";
        displayMessage("Correct guess");
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.score').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    // else if (guess > secret_number) {
    //     if (score > 0) {
    //         // document.querySelector('.message').textContent = "Too High!";
    //         displayMessage("Too High")
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = "You lost the game!";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if (guess < secret_number) {
    //     if (score > 0) {
    //         // document.querySelector('.message').textContent = "Too Low!";
    //         displayMessage("Too Low");
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = "You lost the game!";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

    else if (guess !== secret_number) {
        if (score > 0) {
            displayMessage(guess > secret_number ? "Too high" : "Too Low");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage("You lost the game!");
            document.querySelector('.score').textContent = 0;
        }
    }
});


document.querySelector('.again').addEventListener('click', function () {
    secret_number = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = score;
    // document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.guess').value = "";
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.backgroundColor = "#222";

})