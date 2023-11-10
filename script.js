function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var newTask = document.createElement("li");
    newTask.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(newTask);
    taskInput.value = "";
}
