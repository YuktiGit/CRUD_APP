// window.addEventListener("load", init());

// function init() {
//   document.getElementById("add1").addEventListener("click", addRecord());
// }
function addRecord() {
  var item = new Item();
  // item["#iname"] = document.querySelector("#iname").value;
  // console.log(item["#iname"]);
  for (let key in item) {
    if (key == "isMarked") {
      continue;
    }
    // if (key == "iid") {
    //   item[key] = document.querySelector("#" + key).innerText;
    //   continue;
    // }
    if (key != "icheck") {
      c = "#" + key;
      console.log(c);
      item[key] = document.querySelector(c).value;
    }
  }
  item.icheck = true;
  itemOperations.add(item);
  printTable();
}
// function addRecord() {
//   var item = new Item();
//   for (let i in item) {
//     if (i != "icheck") {
//       item[i] = document.querySelector("#" + i).value;
//     }
//   }
//   item.icheck = true;
//   itemOperations.add(item);
//   printTable();
// }
function printTable() {
  console.log(itemOperations.items);
  var tbd = document.querySelector("#tbd");
  tbd.innerText = "";
  for (let j = 0; j < itemOperations.items.length; j++) {
    if (itemOperations.items[j].icheck == true) {
      var trow = tbd.insertRow();
      for (let key in itemOperations.items[j]) {
        if (key == "icheck") {
          continue;
        }
        var cell = trow.insertCell();
        cell.innerText = itemOperations.items[j][key];
      }
      var cell = trow.insertCell();
      //cell.innerHTML = `<i id=${itemOperations.items[j].iid} class="fas fa-trash"></i>`;
      // document.querySelector("#" + itemOperations.items[j].iid).addEventListener("click", (fun) => {trow.classList.toggle("readytodelete");});
    }
  }
  noOfRecords();
}

function noOfRecords() {
  var count = 0;
  for (let i = 0; i < itemOperations.items.length; i++) {
    if (itemOperations.items[i].icheck == true) {
      count = count + 1;
    }
  }
  document.querySelector("#totalrecords").innerText = `No of items : ${count}`;
}
const showHideSearchBar = () =>
  document.querySelector("#searchbar").classList.toggle("hide");

function init() {
  document.getElementById("#add").addEventListener("click", addRecord());
  document.getElementById("#delete").addEventListener("click", deleteRecord());
  document.getElementById("#sort").addEventListener("click", sortRecord());
  document.querySelector("#searchTxt").addEventListener("change", searchRecord);
  document
    .querySelector("#search")
    .addEventListener("click", showHideSearchBar);
  document.getElementById("#update").addEventListener("click", sortRecord());
  showHideSearchBar();
}

function deleteRecord() {
  var items = itemOperations.remove();
  printTable(items);
}
function sortRecord() {
  itemOperations.items = itemOperations.sort();
  printTable();
}
function searchRecord() {
  var val = document.querySelector("#searchTxt").value;
  var key = document.querySelector("#searchby").value;
  var items = itemOperations.searchAll(key, val);
  printTable(items);
}

var item;
function edit() {
  var id = this.getAttribute("data-itemid");
  item = itemOperations.search(id);
  fillFields();
  console.log("i am Edit ", this.getAttribute("data-itemid"));
}

function fillFields() {
  for (let key in item) {
    if (key == "isMarked") {
      continue;
    }
    document.querySelector("#" + key).value = item[key];
  }
}
function updateRecord() {
  for (let key in item) {
    if (key == "isMarked") {
      continue;
    }
    item[key] = document.querySelector("#" + key).value;
  }
  printTable(itemOperations.items);
}
function createIcon(className, fn, id) {
  // <i class="fas fa-trash"></i>
  // <i class="fas fa-edit"></i>
  var iTag = document.createElement("i");
  iTag.className = className;
  iTag.addEventListener("click", fn);
  iTag.setAttribute("data-itemid", id);

  return iTag;
}
