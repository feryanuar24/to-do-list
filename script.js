var list = document.getElementById("list");

list.addEventListener("click", function (event) {
  var checkbox = event.target.closest("li").querySelector("div");
  if (checkbox.textContent === "") {
    checkbox.textContent = "✔";
  } else {
    checkbox.textContent = "";
  }
});

list.addEventListener("click", function (event) {
  if (event.target.classList.contains("x")) {
    var listItem = event.target.closest("li");
    listItem.remove();
  }
});

function add() {
  var form = document.getElementById("form");
  form.style.display = "flex";
}

function cancel() {
  form.style.display = "none";
}

function ok() {
  var taskInput = document.getElementById("input");
  var list = document.getElementById("list");
  var input = taskInput.value;

  if (input === "") {
    alert("Please enter a task!");
    return;
  }
  var li = document.createElement("li");
  li.classList.add("row");
  var div1 = document.createElement("div");
  div1.classList.add("checkbox");
  li.appendChild(div1);
  var div2 = document.createElement("div");
  div2.classList.add("del");
  div2.textContent = input;
  var span = document.createElement("span");
  span.classList.add("x");
  span.textContent = "x";
  div2.appendChild(span);
  li.appendChild(div2);

  list.appendChild(li);

  taskInput.value = "";

  form.style.display = "none";
}

function save() {
  var todo = list.outerHTML

  // Menyimpan daftar tugas ke penyimpanan lokal
  localStorage.setItem("todo", JSON.stringify(todo));
}

window.addEventListener("load", function () {
  var todo = JSON.parse(localStorage.getItem("todo"));

  list.innerHTML = todo;
});
