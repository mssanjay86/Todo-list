type Task = {
    taskName: string,
    completed: boolean
}


let list = document.getElementById("todo") as HTMLUListElement;
let input = document.getElementById("task") as HTMLInputElement;
let form = document.getElementById("form") as HTMLFormElement;

const tasks: Task[] = [];
const delTasks = [];


form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value == "" || input.value == null) return
    const task: Task = {
        taskName: input.value,
        completed: false
    }


    addListItem(task);
    input.value = "";
})



function addListItem(task: Task) {
    tasks.push(task);
    const li = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const completedBtn = document.createElement('button');

    deleteBtn.innerHTML = "Delete";
    completedBtn.innerHTML = "Completed"
    completedBtn.className = "complete-btn";
    deleteBtn.className = "delete-btn";


    completedBtn.addEventListener('click', () => {
        completedTasks(task, li, completedBtn, deleteBtn)
    })


    deleteBtn.addEventListener("click", () => {
        deletedTasks(task.taskName)
        li.style.display = "none"
    })



    li.innerHTML = task.taskName;
    li.append(completedBtn);

    li.appendChild(deleteBtn);

    list.appendChild(li);

}

function completedTasks(task: { taskName?: string; completed: any; }, li: HTMLLIElement, completedBtn: HTMLButtonElement, deleteBtn: HTMLButtonElement) {
    task.completed = true;
    li.style.textDecoration = "line-through";
    completedBtn.style.display = "none"
    deleteBtn.style.display = "none"
}

function deletedTasks(task: string) {
    const li = document.createElement('li');
    li.innerHTML = task;
    document.getElementById("deleted-todo")?.appendChild(li);

}


const searchTask = document.getElementById("searchText");
searchTask?.addEventListener("keyup", (e) => {
    search(e);
})
function search(e: KeyboardEvent) {
    let currentText = (e.target as HTMLInputElement).value.toLowerCase();
    let listItems = document.querySelectorAll("#todo li");
    listItems.forEach((task) => {
        if (task.textContent?.toLowerCase().indexOf(currentText) != -1) {
            task.closest("li")!.style.display = "block";
        } else {
            task.closest("li")!.style.display = "none";
        }

    })
}


