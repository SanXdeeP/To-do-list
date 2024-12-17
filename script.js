// Function to add a task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item (li)
    const li = document.createElement("li");
    li.innerHTML = `
        ${taskInput.value}
        <button onclick="deleteTask(this)">Delete</button>
    `;

    // Add li to the task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}

// Function to delete a task
function deleteTask(button) {
    button.parentElement.remove(); // Remove the parent <li>
}
