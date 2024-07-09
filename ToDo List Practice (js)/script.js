const write = document.getElementById("write");
const todo = document.getElementById("todo-list");

write.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    addtodo(this.value);
    this.value = " ";
  }
});

function addtodo(val) {
  let list = document.createElement("li");
  list.innerHTML = `${val}`;
  todo.appendChild(list);
  console.log(val);

  list.addEventListener("click", function () {
    this.classList.toggle("done");
  });
}

