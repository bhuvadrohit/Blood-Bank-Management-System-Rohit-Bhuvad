function addDonor() {
  let name = document.getElementById("name").value;
  let blood = document.getElementById("blood").value;

  if (name === "" || blood === "") {
    alert("Fill all fields");
    return;
  }

  let donors = JSON.parse(localStorage.getItem("donors")) || [];

  donors.push({ name: name, blood: blood });

  localStorage.setItem("donors", JSON.stringify(donors));

  alert("Donor Added");
}

window.onload = function () {
  loadView();
  loadDelete();
};

function loadView() {
  let table = document.getElementById("tableBody");
  if (!table) return;

  let donors = JSON.parse(localStorage.getItem("donors")) || [];

  donors.forEach(function (d) {
    let row = table.insertRow();
    row.insertCell(0).innerHTML = d.name;
    row.insertCell(1).innerHTML = d.blood;
  });
}

function searchPage() {
  let input = document.getElementById("search").value.toLowerCase();

  let donors = JSON.parse(localStorage.getItem("donors")) || [];

  let table = document.getElementById("tableBody");
  table.innerHTML = "";

  donors.forEach(function (d) {
    if (d.name.toLowerCase().includes(input)) {
      let row = table.insertRow();
      row.insertCell(0).innerHTML = d.name;
      row.insertCell(1).innerHTML = d.blood;
    }
  });
}

function loadDelete() {
  let table = document.getElementById("deleteTable");
  if (!table) return;

  let donors = JSON.parse(localStorage.getItem("donors")) || [];

  donors.forEach(function (d, index) {
    let row = table.insertRow();

    row.insertCell(0).innerHTML = d.name;
    row.insertCell(1).innerHTML = d.blood;

    row.insertCell(2).innerHTML =
      `<button onclick="removeDonor(${index})">Delete</button>`;
  });
}

function removeDonor(index) {
  let donors = JSON.parse(localStorage.getItem("donors")) || [];

  donors.splice(index, 1);

  localStorage.setItem("donors", JSON.stringify(donors));

  location.reload();
}

function showMore() {
let text = document.getElementById("moreText");
if (text.style.display === "none") {
text.style.display = "block";
} else {
text.style.display = "none";
}
}