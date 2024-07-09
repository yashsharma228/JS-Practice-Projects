const form = document.getElementById("TrackerForm");
const list = document.getElementById("Expense-List");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const description = document.getElementById("Desc").value;
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;
  if (document && category && !isNaN(amount)) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td> ${description}</td> <td> ${category} </td> <td> ${amount} </td>`;
    list.appendChild(newRow);
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
  } else {
    alert("Please fill out all fields with valid Data");
  }
});
