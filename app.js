/////////////////////////////////
//ADD A TASK
////////////////////////////////

//Declare Consts Globally
const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");
const list = document.querySelector("ul.collection");

//Register EventListners
form.addEventListener("submit", runEvent);
taskInput.addEventListener("keyup", onKey);

//Function for when keys are pressed to type in form
function onKey(e) {
  //Displays keypresses in real-time
  heading.innerHTML = e.target.value;
}

//Function for logic when SUBMIT BUTTON or ENTER is pressed
function runEvent(e) {
  //Declare const for new list item creation
  const li = document.createElement("li");
  //Setting class attributes for new created li
  li.setAttribute("class", "collection-item");
  //Set li to have the typed input value from taskInput
  li.innerHTML = `${
    taskInput.value
  }<a href="#" class="delete-item secondary-content">`;

  //Declare const for delete buttons
  const a = document.createElement("a");
  //Assign className & href
  a.className = "delete-item secondary-content";
  a.href = "#";
  //Declare const for trash can
  const trashCan = document.createElement("i");
  //Assign className
  trashCan.className = "fas fa-trash";

  //Append trashCan to a
  a.appendChild(trashCan);
  //Append a to li
  li.appendChild(a);
  //Append li to const list
  list.appendChild(li);

  //Function to save new tasks into local storage
  saveDataLocally();

  e.preventDefault();
}

////////////////////////////
//SAVE TO LOCAL STORAGE (RAN INSIDE runEvent FUNCTION)
//Displays data in JSONs, Strings, and Arrays in developer console / application
////////////////////////////

//Declare Arrays Globally for Local Storage
let newTaskArray = [];
let parsedArray = [];

function saveDataLocally() {
  //Declare variable and assign it what is typed in the form)
  newTask = `${taskInput.value}`;
  console.log("JSON Task:", newTask);

  //Change newTask JSON to a string
  stringyObject = JSON.stringify(newTask);
  console.log("stringyObject Task:", stringyObject);

  //Push latest input from form into array
  newTaskArray.push(`${taskInput.value}`);
  console.log("JSON Array:", newTaskArray);

  //Change JSON array to a string
  stringyObject = JSON.stringify(newTaskArray);
  //Set stringyObject to save in local storage
  localStorage.setItem("stringyObject Array:", stringyObject);
  console.log("stringyObject Array:", stringyObject);

  //Parse stringyObject back to a JSON
  parsedArray = JSON.parse(localStorage.getItem("stringyObject Array:"));
  localStorage.setItem("Parsed Array:", parsedArray);
  console.log("Parsed Array:", parsedArray);
}

/////////////////////////////////
//DELETE A TASK
////////////////////////////////

//Declare Const Globally
const bodyNode = document.body;

//Register EventListner
bodyNode.addEventListener("click", eventHandler);

//eventHandler Function
function eventHandler(e) {
  //If trash can is clicked then remove task
  if (e.target.parentElement.className === "delete-item secondary-content") {
    e.target.parentElement.parentElement.remove();
    //Assignin let for Looping through array search for inner text of element
    let index = parsedArray.indexOf(
      e.target.parentElement.parentElement.innerText
    );

    //console.log(index);

    //Splice the change into the array
    parsedArray.splice(index, 1);

    //console.log(parsedArray);

    //Change JSON array to a string
    let stringyObject = JSON.stringify(parsedArray);

    //Set stringyObject to save in local storage
    localStorage.setItem("stringyObject Array:", stringyObject);

    e.preventDefault();
  }
}

/////////////////////////////////
//DELETE ALL
////////////////////////////////

//Declare const globally and assign it to the Clear Tasks button
const clearTaskButton = document.querySelector(".clear-tasks");

//Register EventListener
clearTaskButton.addEventListener("click", function() {
  let toDelete = document.querySelectorAll("li");

  //Loop through array to delete all data
  toDelete.forEach(function(element) {
    element.remove();
    //Delete everything in local storage
    localStorage.clear();
  });
});

/////////////////////////////////
//READ LOCAL STORAGE
////////////////////////////////

//Function to read local storage and build task list from that
function readStorage() {
  parsedArray = JSON.parse(localStorage.getItem("stringyObject Array:"));
  //Check if parsedArray is empty
  if (parsedArray == null) {
    console.log("Nothing here...");
  } else {
    //console.log("iterating");
    //For Loop to interate through local storage and uses
    //a nearly identical function as runEvent (which adds tasks to DOM)
    for (i = 0; i < localStorage.length; i++) {
      //Declare const for new list item creation
      const li = document.createElement("li");
      //Setting class attributes for new created li
      li.setAttribute("class", "collection-item");
      //Set li to have the values of the parsedArray
      parsedArray.forEach(function(element) {
        li.innerHTML = `${
          parsedArray[i]
        }<a href="#" class="delete-item secondary-content">`;
      });

      //Declare const for delete buttons
      const a = document.createElement("a");
      //Assign className & href
      a.className = "delete-item secondary-content";
      a.href = "#";
      //Declare const for trash can
      const trashCan = document.createElement("i");
      //Assign className
      trashCan.className = "fas fa-trash";

      //Append a to i
      a.appendChild(trashCan);
      //Append a to li
      li.appendChild(a);
      //Append li to const list (const list is declared globally above)
      list.appendChild(li);
    }
  }
}

//Run Function
readStorage();

/////////////////////////////////
//FILTER A TASK
////////////////////////////////

//Declare Consts Globally
const filterInput = document.getElementById("task-filter");

//Register EventListners
filterInput.addEventListener("keyup", filter);

//Function to filter task items
function filter() {
  //console.log(filterInput.value);

  let elements = document.getElementsByClassName("collection-item");
  //console.log(elements);

  elements = [].slice.call(elements);
  //console.log(elements);

  //Interating through array for items matching typed value
  elements.forEach(element => {
    if (element.innerText.indexOf(filterInput.value) > -1) {
      //console.log(element.innerText.indexOf(filterInput.value) > -1);
      element.style.display = "";
    } else {
      element.style.display = "none";
    }
  });
}

//TO DO

//Add the time task is added.

//Show alert about the time.
