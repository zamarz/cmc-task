function addItemToList() {
  let newEntryForList = document.getElementById("listEntry").value;
  if (typeof newEntryForList !== "undefined" && newEntryForList !== null) {
    data.push(newEntryForList);
  }
  console.log(data);

  document.getElementById("listEntry").value = "";
}

let data = new Array();

function updateEventList() {
  const listTasks = document.getElementById("listTasks");

  let li = document.createElement("li");

  let ul = `<ul>${data.map((data) => `<li>${data}</li>`).join("")}
        </ul>`;
  listTasks.innerHTML = ul;
}

itemAdder.addEventListener("click", updateEventList);
