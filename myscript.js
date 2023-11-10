const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function createTaskElement(taskName) {
  const li = document.createElement('li');
  li.innerHTML = `
    <div class="checkbox-container">
      <input type="checkbox" class="complete-checkbox">
      <span>${taskName}</span>
    </div>
    <button class="complete">Complete</button>
    <button class="active">Active</button>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;
  return li;
}

function addTask() {
  const taskName = taskInput.value.trim();
  if (taskName === '') {
    alert('Please enter a task name.');
    return;
  }

  const taskElement = createTaskElement(taskName);
  taskList.appendChild(taskElement);

  taskInput.value = '';
  attachTaskListeners(taskElement);
}

function attachTaskListeners(taskElement) {
  const taskName = taskElement.querySelector('span');
  const completeCheckbox = taskElement.querySelector('.complete-checkbox');
  const completeButton = taskElement.querySelector('.complete');
  const activeButton = taskElement.querySelector('.active');
  const deleteButton = taskElement.querySelector('.delete');
  const editButton = taskElement.querySelector('.edit');

  completeButton.addEventListener('click', function() {
    completeCheckbox.checked = true;
    taskName.classList.add('completed');
  });

  completeButton.addEventListener('click', function() {
    completeCheckbox.checked = true;
    taskName.classList.add('completed');
    alert('Well Done Champ!!'); 
  });

  activeButton.addEventListener('click', function() {
    completeCheckbox.checked = false;
    taskName.classList.remove('completed');
    taskElement.classList.toggle('active');
    alert('You Got It !!'); 
  })
  activeButton.addEventListener('click', function() {
    completeCheckbox.checked = false;
    taskName.classList.remove('completed');
    taskElement.classList.toggle('.active');
  });
  
  

  deleteButton.addEventListener('click', function() {
    taskList.removeChild(taskElement);
    filterTasks();
  });

  completeCheckbox.addEventListener('change', function() {
    taskName.classList.toggle('completed', completeCheckbox.checked);
    alert("Well Done Champs!!")
    
  });
  

  editButton.addEventListener('click', function() {
    const newTaskName = prompt('Edit task:', taskName.innerText);
    if (newTaskName && newTaskName.trim() !== '') {
      taskName.innerText = newTaskName;
    }
  });
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
function filterTasks() {
    const tasks = taskList.querySelectorAll('li');
    tasks.forEach(task => {
      const isCompleted = task.querySelector('.complete-checkbox').checked;
      const isActive = task.classList.contains('active');
  
      switch (filterType) {
        case 'all':
          task.style.display = 'block';
          break;
        case 'completed':
          task.style.display = isCompleted ? 'block' : 'none';
          break;
        case 'active':
          task.style.display = isActive ? 'block' : 'none';
          break;
      }
    });
  }

