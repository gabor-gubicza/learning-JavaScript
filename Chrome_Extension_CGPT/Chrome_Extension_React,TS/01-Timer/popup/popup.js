const task = [];

const addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.addEventListener("click", () => addTask());

function addTask() {
  const taskNum = task.length;
  const taskRow = document.createElement("div");
  const text = document.createElement("input");
  text.type = "text";
  text.placeholder = "Enter a Task...";
  text.addEventListener("change", () => {
    task[taskNum] = text.value;
  });

  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "X";
  deleteBtn.addEventListener("click", () => {
    tasks.splice(taskNum, 1);
  });
  taskRow.appendChild(text);
  taskRow.appendChild(deleteBtn);
  const taskContainer = document.getElementById("task-container");
  taskContainer.appendChild(taskRow);
}
