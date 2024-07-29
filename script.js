document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', handleTaskAction);

    function addTask(e) {
        e.preventDefault();
        const taskText = taskInput.value;
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Supprimer';
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }

    function handleTaskAction(e) {
        if (e.target.tagName === 'BUTTON') {
            const li = e.target.parentElement;
            li.remove();
        } else {
            e.target.classList.toggle('completed');
        }
    }
});
