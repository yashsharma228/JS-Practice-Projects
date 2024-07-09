let number = document.getElementById("num");
let button = document.getElementById("btn");
let para = document.querySelector(".para");
let round = document.getElementById("Round");

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);

let guessRound = 0;
button.addEventListener("click", () => {
  guessNumber();
});

function guessNumber() {
  if (number.value < 1 || number.value > 100 || isNaN(number.value)) {
    para.innerHTML = "Please enter only a number between 1 to 100";
  } else {
    guessRound++;
    round.innerHTML = "Number of guess : " + guessRound;
    if (number.value > answer) {
      para.innerHTML = "You guess too high";
      number.value = "";
    } else if (number.value < answer) {
      para.innerHTML = "You guessed too low!";
      number.value = "";
    } else {
      para.innerHTML =
        "Congratulations! You guessed the correct number in " +
        guessRound +
        " guesses! ";
      button.disabled = true;
      setTimeout(() => {
        resetguesees();
      }, 5000);
    }
  }
}

function resetguesees() {
  guessRound = 0;
  answer = Math.floor(Math.random() * 100) + 1;
  number.value = "";
  button.disabled = false;
  round.innerHTML = "No. of guess : 0";
}
