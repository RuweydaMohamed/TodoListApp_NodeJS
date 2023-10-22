const readline = require('readline');
const { addTask, updateTask, deleteTask, displayTodoList } = require('./todo');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptMenu() {
  console.log('\nMenu:');
  console.log('1. Add Task');
  console.log('2. Update Task');
  console.log('3. Delete Task');
  console.log('4. Display Todo List');
  console.log('5. Exit');

  rl.question('\nEnter your choice: ', (choice) => {
    switch (choice) {
      case '1':
        rl.question('Enter the task: ', (task) => {
          addTask(task);
          promptMenu();
        });
        break;
      case '2':
        rl.question('Enter the task index: ', (index) => {
          rl.question('Enter the updated task: ', (updatedTask) => {
            updateTask(parseInt(index) - 1, updatedTask);
            promptMenu();
          });
        });
        break;
      case '3':
        rl.question('Enter the task index: ', (index) => {
          deleteTask(parseInt(index) - 1);
          promptMenu();
        });
        break;
      case '4':
        displayTodoList();
        promptMenu();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Invalid choice!');
        promptMenu();
    }
  });
}

promptMenu();