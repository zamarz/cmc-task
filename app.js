function addItemToList() {
  let newEntryForList = document.getElementById("listEntry").value.trim();
  if (newEntryForList) {
    data.push(newEntryForList);
  }
  console.log(data);

  document.getElementById("listEntry").value = "";
}

// let data = ["Read a book", "Water plants", "Take a walk"];

// addNewListItem();

// function addNewListItem() {
//   const listTasks = document.getElementById("listTasks");

//   let ul = `<ul id="tasksToStyle">${data
//     .map(
//       (item) =>
//         `<li>${item}<button type="button" id="deleteButton">Delete</button></li>`
//     )
//     .join("")}
//         </ul>`;
//   listTasks.innerHTML = ul;
// }

// const itemAdder = document.getElementById("itemAdder");
// itemAdder.addEventListener("click", addNewListItem);

let list = document.querySelector("ul");

list.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  },
  false
);
