const inputText = document.getElementById("text-box");
const form = document.querySelector("form");
const listContainer = document.getElementById("list-container");

let allTodos = getTodo();
renderTodos();

form.addEventListener('submit',function(e){
    e.preventDefault();
    addTodo();
})

function addTodo(){
    const input = inputText.value.trim();
    if(input.length > 0 ){
       showToast(`Task ${input} added successfully`);
        const inputObject = {
            id:`todo-${Date.now()}`,
            todotext:input,
            completed:false
        }
        allTodos.push(inputObject);
        renderTodos();
        inputText.value = "";
        saveTodo();
    }
}

function renderTodos(){

    listContainer.innerHTML = "";

    allTodos.forEach(todo=>{
        updateTodoList(todo);
    });

}

function updateTodoList(todo){
  
    const list = document.createElement("li");
    list.className = "todo-list";
    list.innerHTML = `
    <input type="checkbox" id="${todo.id}" ${todo.completed ? "checked" : ""}>
                <label class="checkbox" for="${todo.id}">
                    <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                    </svg>
                </label>
                
                <label class="list-text" for="${todo.id}" >
                    ${todo.todotext}
                </label>
                <button class="delete-button">

                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                </button>
    `;
   
    const deleteButton = list.querySelector(".delete-button");
    deleteButton.addEventListener("click", ()=>{
        deleteTodoItem(todo.id);
    });

    const checkbox = list.querySelector("input");
    checkbox.addEventListener("change", () => {
        const todoFound = allTodos.find(t => t.id === todo.id);
        todoFound.completed = checkbox.checked;

        saveTodo();
    });
    
    listContainer.append(list);
}

function deleteTodoItem(todoId){
    allTodos = allTodos.filter(todo=> todo.id !== todoId);
    saveTodo();
    renderTodos();
}

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(allTodos));
}
function getTodo(){

    const data = localStorage.getItem("todos");
     return data ? JSON.parse(data) : [];
}

/*from this forrward..... NOT DONE BY ME */
function showToast(message){

    const container = document.getElementById("toast-container");

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(()=>{
        toast.classList.add("hide");

        setTimeout(()=>{
            toast.remove();
        },300);

    },2000);
}