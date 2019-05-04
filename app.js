//Define ui vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task'); 

//Load all event listeners
loadEventListeners();

function loadEventListeners() {
    //add task event
    form.addEventListener('submit', addTask);

    //remove task event
    taskList.addEventListener('click', removeTask);

    //clear task event
    clearBtn.addEventListener('click', clearTasks);

    //filter tasks events
    filter.addEventListener('keyup', filterTasks);
}

//add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    } else {
        //create li element
        const li = document.createElement('li');
        //add class
        li.className = 'collection-item';
        //create text node and append to the li
        li.appendChild(document.createTextNode(taskInput.value));
        //create new link element for delete
        const link = document.createElement('a');
        //add class to link
        link.className = 'delete-item secondary-content';
        //add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // append link to li
        li.appendChild(link);

        //append li to the ul
        taskList.appendChild(li);

        //clear input
        taskInput.value = '';
    }

    e.preventDefault();
}

//remove task
function removeTask(e) {
    if( e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

//clear task
function clearTasks() {
    //taskList.innerHTML = '';
    if (confirm('Are you sure you want to clear all tasks?')) {
        while(taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }
}

//filter task
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
         const item = task.firstChild.textContent;
         if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
         } else {
             task.style.display = 'none';
         }
    });
}
    