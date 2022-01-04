
// selectors:
const todo_input = document.querySelector('.todo-input')
const todo_button = document.querySelector('.todo-button')
const todo_list = document.querySelector('.todo-list')
const filter_option = document.querySelector('.filter-todos')





// event listeners:
todo_button.addEventListener('click' , add_todo)
todo_list.addEventListener('click' , check)
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
    todo_input.value = ''
}


// trash and chrck-square icone:
function check(e) {

    const check_list = {...e.target.classList}
    const item = e.target
    const todo = item.parentElement.parentElement
    

    if (check_list[1] === 'fa-trash-alt') {
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



