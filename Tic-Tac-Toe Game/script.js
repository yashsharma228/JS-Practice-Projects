let btn = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");
let msgCon = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let roundO = true;

const winPattterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  roundO = true;
  enaableBoxes();
  msgCon.classList.add("hide");
};

btn.forEach((box) => {
  box.addEventListener("click", () => {
    if (roundO) {
      box.innerText = "O";
      roundO = false;
    } else {
      box.innerText = "X";
      roundO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of btn) {
    box.disabled = true;
  }
};

const enaableBoxes = () => {
  for (let box of btn) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
   msg.innerText = `Congratulations winner is ${winner}`;
   msgCon.classList.remove("hide");
   disableBoxes();
};

const checkWinner = () => {
  for (pattern of winPattterns) {
    let pos1 = btn[pattern[0]].innerText;
    let pos2 = btn[pattern[1]].innerText;
    let pos3 = btn[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner", pos1);
        showWinner(pos1);
      }
    }
  }
};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
