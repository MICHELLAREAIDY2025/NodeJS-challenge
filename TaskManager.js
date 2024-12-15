// Task list array
let tasks = [
    "Task 1: Do the laundry",
    "Task 2: Write documentation",
    "Task 3: Code review",
];

// Add a task
function add(task) {
    tasks.push(task);
    console.log(`Added task: "${task}"`);
}

// Remove a task by its number or the last task if no number is provided
function remove(taskNumber) {
    if (taskNumber === undefined) {
        // Remove the last task if no number is provided
        const removedTask = tasks.pop();
        if (removedTask) {
            console.log(`Removed last task: "${removedTask}"`);
        } else {
            console.log("No tasks to remove.");
        }
    } else if (taskNumber > 0 && taskNumber <= tasks.length) {
        const removedTask = tasks.splice(taskNumber - 1, 1);
        console.log(`Removed task: "${removedTask}"`);
    } else {
        console.log("Invalid task number.");
    }
}

// List all tasks
function list() {
    console.log("Tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}

// Test the functions
const testTaskManager = () => {
    list(); // List current tasks

    add("Task 4: Prepare presentation"); // Add a new task
    list(); // List tasks again

    remove(); // Remove the last task
    list(); // List tasks again

    remove(1); // Remove the first task
    list(); // List tasks again

    remove(2); // Remove the second task
    list(); // List tasks again
};

// Execute the test function
testTaskManager();