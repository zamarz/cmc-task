function addItemToList() {
  let newEntryForList = document.getElementById("listEntry").value.trim();
  if (newEntryForList) {
    data.push(newEntryForList);
  }
  console.log(data);

  document.getElementById("listEntry").value = "";
}

let data = [];

function addNewListItem() {
  const listTasks = document.getElementById("listTasks");

  let ul = `<ul id="tasksToStyle">${data
    .map(
      (item) =>
        `<li>${item}<button type="button" id="deleteButton">Delete</button></li>`
    )
    .join("")}
        </ul>`;
  listTasks.innerHTML = ul;
}

const itemAdder = document.getElementById("itemAdder");
itemAdder.addEventListener("click", addNewListItem);
