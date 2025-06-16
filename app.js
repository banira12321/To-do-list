const inputEL =  document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoListEL = document.getElementById('todo-list');

let todos = [];

function addTodo(){
    const text = inputEL.value.trim();

    if(text){
        todos.push({text: text});
        console.log(todos);
        

        inputEL.value = '';
    }
}

addBtn.addEventListener('click', addTodo);
