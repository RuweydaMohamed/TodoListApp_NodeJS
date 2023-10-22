const fs = require('fs');

const todoFile = 'todo.json';

function addTask(task) {
  const todoList = loadTodoList();
  todoList.push(task);
  saveTodoList(todoList);
  console.log('Task added successfully!');
}

function updateTask(index, updatedTask) {
  const todoList = loadTodoList();
  if (index >= 0 && index < todoList.length) {
    todoList[index] = updatedTask;
    saveTodoList(todoList);
    console.log('Task updated successfully!');
  } else {
    console.log('Invalid task index!');
  }
}

function deleteTask(index) {
  const todoList = loadTodoList();
  if (index >= 0 && index < todoList.length) {
    todoList.splice(index, 1);
    saveTodoList(todoList);
    console.log('Task deleted successfully!');
  } else {
    console.log('Invalid task index!');
  }
}

function displayTodoList() {
  const todoList = loadTodoList();
  console.log('Todo List:');
  todoList.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
}

function loadTodoList() {
  try {
    const data = fs.readFileSync(todoFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

function saveTodoList(todoList) {
  const data = JSON.stringify(todoList, null, 2);
  fs.writeFileSync(todoFile, data);
}

module.exports = {
  addTask,
  updateTask,
  deleteTask,
  displayTodoList
};