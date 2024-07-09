const input = document.getElementById("input");

function onfun() {
  input.style.backgroundColor = "black";
}

function offun() {
  input.style.backgroundColor = "white";
}

function funsubmit() {
  alert(`${input.value}`);
}

function selectfun() {
  alert("you select something");
}
