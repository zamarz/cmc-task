const listTasks = document.getElementById("listTasks");

let data = ["test 1", "test 2"];

let li = document.createElement("li");

let ul = `<ul>${data.map((data) => `<li>${data}</li>`).join("")}
    </ul>`;
listTasks.innerHTML = ul;
