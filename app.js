function addItemToList() {
  let newEntryForList = document.getElementById("formEntry").value.trim();
  if (newEntryForList) {
    confirm("Your item has been successfully added");
  } else {
    alert("Please enter a task before you submit.");
  }

  document.getElementById("formEntry").value = "";
}

const listItemsLabel = document.querySelectorAll("ul li label");
const listItems = document.querySelectorAll("ul li");

listItemsLabel.forEach((li) => {
  let cb = li.querySelector('input[type="checkbox"]');
  if (cb) {
    cb.addEventListener("click", function () {
      li.classList.toggle("checked");
    });
  }
});

listItems.forEach((li) => {
  let cb = li.querySelector('input[type="checkbox"]');
  if (cb) {
    cb.addEventListener("click", function () {
      li.classList.toggle("checked");
    });
  }
});
