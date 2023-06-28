

const tasks = [
  {
      id: '1138465078061',
      completed: false,
      text: 'Посмотреть новый урок по JavaScript',
  },
  {
      id: '1138465078062',
      completed: false,
      text: 'Выполнить тест после урока',
  },
  {
      id: '1138465078063',
      completed: false,
      text: 'Выполнить ДЗ после урока',
  },
];

for (let tsk of tasks) {
  addTask(tsk.id, tsk.text)
}

function addTask(idTask, textTask) {
  let tasksList = document.querySelector('.tasks-list');

  let divTaskItem = document.createElement('div');
  divTaskItem.className = 'task-item';
  divTaskItem.dataset.taskId = (idTask);
  tasksList.prepend(divTaskItem);

  let divTaskItemMainContent = document.createElement('div');
  divTaskItemMainContent.className = 'task-item__main-container';
  
  let divTaskItemMainContent2 = document.createElement('div');
  divTaskItemMainContent2.className = 'task-item__main-content';

  let checkboxForm = document.createElement('form');
  checkboxForm.className = 'checkbox-form';

  let inputCheckbox = document.createElement('input');
  inputCheckbox.className = 'checkbox-form__checkbox';
  inputCheckbox.type = 'checkbox';
  inputCheckbox.id = idTask;

  let labelInputCheckbox = document.createElement('label');
  labelInputCheckbox.htmlFor = idTask;
  checkboxForm.prepend(inputCheckbox);
  checkboxForm.append(labelInputCheckbox);

  let spanTask = document.createElement('span');
  spanTask.className = 'task-item__text';
  spanTask.innerText = textTask;

  divTaskItemMainContent2.append(spanTask);
  divTaskItemMainContent2.prepend(checkboxForm);

  let buttonTask = document.createElement('button');
  buttonTask.classList.add('task-item__delete-button', 'default-button', 'delete-button');
  buttonTask.innerHTML = 'Удалить';

  divTaskItemMainContent.prepend(divTaskItemMainContent2);
  divTaskItemMainContent.append(buttonTask);

  divTaskItem.prepend(divTaskItemMainContent);
  tasksList.append(divTaskItem);
}