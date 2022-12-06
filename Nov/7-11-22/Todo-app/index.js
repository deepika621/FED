function handleToDoFormSubmit(){
    console.log("Form Submitted");
    const txtTodo = document.getElementById("txtTodo");
    console.log(txtTodo);
    const todoTextValue = txtTodo.value;
    console.log(todoTextValue);
    createTodoListItem(todoTextValue);
}
function createTodoListItem(text){
    const li="<li><label>"+text+"</label><button>Edit</button><button>Delete</button></li>"
    const ul=document.getElementById("todoList");
    //append li to inner html of ul//
    ul.innerHTML=ul.innerHTML+li;
}