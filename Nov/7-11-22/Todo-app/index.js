let todos=[];
function handleToDoFormSubmit(){
    console.log("Form Submitted");
    const txtTodo = document.getElementById("txtTodo");
    console.log(txtTodo);
    const todoTextValue = txtTodo.value;
    txtTodo.value="";
    console.log(todoTextValue);
    createTodoListItem(todoTextValue);
}
function createTodoListItem(text){
    todos.push(text)
    const li="<li><label id=todo"+todos.length+" style='width:80%'>"+text+"</label><button id=editBtn"+todos.length+" onClick='handleEditClick(event)' class='btn btn-primary'>Edit</button>&nbsp;&nbsp;<button class='btn btn-danger'>Delete</button></li>"
    const ul=document.getElementById("todoList");
    //append li to inner html of ul//
    ul.innerHTML=ul.innerHTML+li;
}
function handleEditClick(event){
    console.log(event.target.id);
    const labelID=event.target.id.toString().replace("editBtn","todo");
    const label=document.getElementById(labelID);
    label.style.display="none";
    console.log(label);
    console.log("handling edit click");
}