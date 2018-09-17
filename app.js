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

  //Append a to i
  a.appendChild(trashCan);
  //Append a to li
  li.appendChild(a);
  //Append li to const list (const list is declared globally above)
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
  //Set newTask JSON to save in local storage
  localStorage.setItem("JSON Task:", newTask);

  //Change newTask JSON to a string
  stringyObject = JSON.stringify(newTask);
  //Set stringyObject to save in local storage
  localStorage.setItem("stringyObject Task:", stringyObject);

  //Push latest input from form into array
  newTaskArray.push(`${taskInput.value}`);
  //Set newTaskArray JSON to save in local storage
  localStorage.setItem("JSON Array:", newTaskArray);

  //Change JSON array to a string
  stringyObject = JSON.stringify(newTaskArray);
  //Set stringyObject to save in local storage
  localStorage.setItem("stringyObject Array:", stringyObject);

  //Parse stringyObject back to a JSON
  parsedArray = JSON.parse(localStorage.getItem("stringyObject Array:"));
  localStorage.setItem("Parsed Array:", parsedArray);
}
/////////////////////////////////
//DELETE A TASK
////////////////////////////////

//Declare Const Globally
const bodyNode = document.body;

//Register EventListener
bodyNode.addEventListener("click", eventHandler);

//eventHandler Function
function eventHandler(e) {
  //If trash can is clicked then remove task
  if (e.target.parentElement.className === "delete-item secondary-content") {
    let s = document.getElementsByClassName("collection-item");

    let v = document.getElementsByClassName("collection-item").innerHTML.value;
    console.log(v);
    e.target.parentElement.parentElement.remove();

    var i = parsedArray.indexOf("a");
    if (i > -1) {
      parsedArray.splice(i, 1);
    }
    // array = [2, 9]
    console.log(parsedArray);
    //let x = document.getElementsByClassName("collection-item").innerHTML;
    //console.log(x);
    let f = document.getElementsByClassName("delete-item secondary-content");
    //console.log(s.innerHTML);
    /* var json = JSON.parse(localStorage["results"]);
    for (i = 0; i < json.length; i++)
      if (json[i].id == "item-3") json.splice(i, 1);
    localStorage["results"] = JSON.stringify(json);
 */
    //localStorage.removeItem("JSON Array");
    //localStorage.removeItem("Parsed Array");
    localStorage.splice;
  }
}

/////////////////////////////////
//DELETE ALL
////////////////////////////////

/* 
//Declare const globally and assign it to the Clear Button
const clearTaskButton = document.querySelector(".clear-tasks");

//Registering EventListener
clearTaskButton.addEventListener("click", eventHandlerDelete);

//Function to delete all tasks
function eventHandlerDelete() {
  //Declare let and assign it to all li
  let toDelete = document.querySelectorAll("li");
  //Remove each element that is clicked
  toDelete.forEach(function(element) {
    element.remove();
  });
}
 */

const clearTaskButton = document.querySelector(".clear-tasks");

clearTaskButton.addEventListener("click", function() {
  let toDelete = document.querySelectorAll("li");
  toDelete.forEach(function(element) {
    element.remove();
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
    console.log("iterating");
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
//const filter = document.querySelector("input");
const taskFilterInput = document.getElementById("task_filter");
const filterHeading = document.querySelector("h5");

//Register EventListners
//form.addEventListener("submit", runEvent);
taskFilterInput.addEventListener("keyup", onKey);

filterHeading.innerHTML = e.target.value;

console.log(filterHeading);

/* 


//Declare Consts Globally
const filter = document.querySelector("input");
const taskFilterInput = document.getElementById("task_filter");
//const heading = document.querySelector("h5");
//const list = document.querySelector("ul.collection");

//Register EventListners
//form.addEventListener("submit", runEvent);
taskFilterInput.addEventListener("keyup", onKey);

//Function for when keys are pressed to type in form
function onKey(e) {
  //Displays keypresses in real-time
  heading.innerHTML = e.target.value;
}

//Function for logic when SUBMIT BUTTON or ENTER is pressed
function runFilter(e) {
  console.log(heading);
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

  //Append a to i
  a.appendChild(trashCan);
  //Append a to li
  li.appendChild(a);
  //Append li to const list (const list is declared globally above)
  list.appendChild(li);

  //Function to save new tasks into local storage
  saveDataLocally();

  e.preventDefault();
}
 */
