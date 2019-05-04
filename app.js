//Define ui vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.cleark-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task'); 

//Load all event listeners
loadEventListeners();

function loadEventListeners() {
    //add task event
    form.addEventListener('submit', addTask);
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