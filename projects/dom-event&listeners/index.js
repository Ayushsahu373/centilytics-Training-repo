const form = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) addTask(taskText);
    taskInput.value = '';
});

function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="task-btns">
            <button class="completeBtn">✅</button>
            <button class="deleteBtn">❌</button>
        </div>
    `;
    taskList.appendChild(li);
    li.querySelector('.completeBtn').addEventListener('click', () => li.classList.toggle('completed'));
    li.querySelector('.deleteBtn').addEventListener('click', () => li.remove());
}

clearBtn.addEventListener('click', () => taskList.innerHTML = '');
