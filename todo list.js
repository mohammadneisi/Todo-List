
// selectors:
const todo_input = document.querySelector('.todo-input')
const todo_button = document.querySelector('.todo-button')
const todo_list = document.querySelector('.todo-list')


// event listeners:
todo_button.addEventListener('click' , add_todo)


function add_todo(e) {
    e.preventDefault()
    
    const todo_div = document.createElement('div')
    todo_div.className='todo'
    const new_todo = `<li>${todo_input.value}</li>
    <span><i class="far fa-check-square"></i></span>
    <span><i class="far fa-trash-alt"></i></span>`

    todo_div.innerHTML = new_todo
    todo_list.appendChild(todo_div) 
    todo_input.value = ''
}
