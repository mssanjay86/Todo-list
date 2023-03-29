"use strict";
let list = document.getElementById("todo");
let input = document.getElementById("task");
let form = document.getElementById("form");
const tasks = [];
const delTasks = [];
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value == "" || input.value == null)
        return;
    const task = {
        taskName: input.value,
        completed: false
    };
    addListItem(task);
    input.value = "";
});
function addListItem(task) {
    tasks.push(task);
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const completedBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete";
    completedBtn.innerHTML = "Completed";
    completedBtn.className = "complete-btn";
    deleteBtn.className = "delete-btn";
    completedBtn.addEventListener('click', () => {
        completedTasks(task, li, completedBtn, deleteBtn);
    });
    deleteBtn.addEventListener("click", () => {
        deletedTasks(task.taskName);
        li.style.display = "none";
    });
    li.innerHTML = task.taskName;
    li.append(completedBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
}
function completedTasks(task, li, completedBtn, deleteBtn) {
    task.completed = true;
    li.style.textDecoration = "line-through";
    completedBtn.style.display = "none";
    deleteBtn.style.display = "none";
}
function deletedTasks(task) {
    var _a;
    const li = document.createElement('li');
    li.innerHTML = task;
    (_a = document.getElementById("deleted-todo")) === null || _a === void 0 ? void 0 : _a.appendChild(li);
}
const searchTask = document.getElementById("searchText");
searchTask === null || searchTask === void 0 ? void 0 : searchTask.addEventListener("keyup", (e) => {
    search(e);
});
function search(e) {
    let currentText = e.target.value.toLowerCase();
    let listItems = document.querySelectorAll("#todo li");
    listItems.forEach((task) => {
        var _a;
        if (((_a = task.textContent) === null || _a === void 0 ? void 0 : _a.toLowerCase().indexOf(currentText)) != -1) {
            task.closest("li").style.display = "block";
        }
        else {
            task.closest("li").style.display = "none";
        }
    });
}
