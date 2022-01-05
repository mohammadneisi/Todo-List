
// selectors:
const todo_input = document.querySelector('.todo-input')
const todo_button = document.querySelector('.todo-button')
const todo_list = document.querySelector('.todo-list')
const filter_option = document.querySelector('.filter-todos')
document.addEventListener('DOMContentLoaded' , get_local_todos)




// event listeners:
todo_button.addEventListener('click' , add_todo)
todo_list.addEventListener('click' , check_remove)
filter_option.addEventListener('click' , filter_todo)





// input and add value:
function add_todo(e) {
    e.preventDefault()
    
    const todo_div = document.createElement('div')
    todo_div.className = 'todo'
    const new_todo = `<li>${todo_input.value}</li>
    <span><i class="far fa-check-square"></i></span>
    <span><i class="far fa-trash-alt"></i></span>`

    todo_div.innerHTML = new_todo
    todo_list.appendChild(todo_div) 
    save_local_todos(todo_input.value)
    todo_input.value = ''
}


// trash and chrck-square icone:
function check_remove(e) {

    const check_list = [...e.target.classList]
    const item = e.target
    const todo = item.parentElement.parentElement
    

    if (check_list[1] === 'fa-trash-alt') {
        remove_local_todos(todo)
        todo.remove() 

    }

    else if(check_list[1] === 'fa-check-square'){
        todo.classList.toggle("completed")
    }
    

}




// filter todos:

function filter_todo (e) {
   
    const todos =[...todo_list.childNodes];
    
    const type = e.target.value
    todos.forEach(todo =>{
        
        if ( type === 'completed' ){  

            if (todo.classList.contains('completed') ) {
                todo.style.display = 'flex'   
            }
            else  todo.style.display = 'none'   
        }
        
        
        else if (type === 'uncompleted' ) {

            if (!todo.classList.contains('completed')) {
                todo.style.display = 'flex';  
            }
            else  todo.style.display = 'none'
            
        }
        
        else todo.style.display = 'flex';

})}




function save_local_todos(todo) {

    let saved_todos = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    :[];
    
    saved_todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(saved_todos))
    
}

function get_local_todos() {

    let saved_todos = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    :[];

    saved_todos.forEach(todo => {

        const todo_div = document.createElement('div')
        todo_div.className = 'todo'
        const new_todo = `<li>${todo}</li>
        <span><i class="far fa-check-square"></i></span>
        <span><i class="far fa-trash-alt"></i></span>`

        todo_div.innerHTML = new_todo
        todo_list.appendChild(todo_div) 
  
    })
    
    
}


function remove_local_todos(todo) {

    // console.log(todo.children[0].innerText)

    let saved_todos = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    :[];

    const filtered_todos = saved_todos.filter(
       (t) => t !== todo.children[0].innerText
    )
    
    localStorage.setItem('todos', JSON.stringify(filtered_todos))
    
}