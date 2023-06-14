import { task } from "./yee";
import make from "./array";

const button = document.querySelector("button");
const project = document.getElementById("project-list");

const array = [];

// Event listener for the button click
button.addEventListener("click", function (event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const dueDate = document.getElementById('due date').value;
  const priority = document.getElementById('priority').value;
  
  const yee = new task(title, description, dueDate, priority);
  array.push(yee);
  createtask(yee);
});

// Event listener for the DOMContentLoaded event
window.addEventListener("DOMContentLoaded", function () {
  // Retrieve the task data from local storage and populate the project list
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("title")) {
      const title = localStorage.getItem(key);
      const description = localStorage.getItem(`description${key.slice(5)}`);
      const dueDate = localStorage.getItem(`due date${key.slice(5)}`);
      const priority = localStorage.getItem(`priority${key.slice(5)}`);
      const yee = new task(title, description, dueDate, priority);
      array.push(yee);
      createtask(yee);
    }
  }
});

function createtask(activity) {
  const row = document.createElement('tr');
  const tcell = document.createElement('td');
  const dcell = document.createElement('td');
  const ucell = document.createElement('td');
  const pcell = document.createElement('td');

  project.appendChild(row);
  row.appendChild(tcell);
  row.appendChild(dcell);
  row.appendChild(ucell);
  row.appendChild(pcell);

  const i = array.length - 1;

  localStorage.setItem(`title${i}`, activity.title);
  localStorage.setItem(`description${i}`, activity.description);
  localStorage.setItem(`due date${i}`, activity.dueDate);
  localStorage.setItem(`priority${i}`, activity.priority);

  function display(i) {
    tcell.textContent = localStorage.getItem(`title${i}`);
    dcell.textContent = localStorage.getItem(`description${i}`);
    ucell.textContent = localStorage.getItem(`due date${i}`);
    pcell.textContent = localStorage.getItem(`priority${i}`);
  }

  display(i);
}
