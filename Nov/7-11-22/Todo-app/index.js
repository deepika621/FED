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
    //const li="<li id=listItem"+todos.length+"><label id=todo"+todos.length+" style='width:80%'>"+text+"</label><button id=editBtn"+todos.length+" onClick='handleEditClick(event)' class='btn btn-primary'>Edit</button>&nbsp;&nbsp;<button class='btn btn-danger'>Delete</button></li>"
    //1. Create li.
    const li = document.createElement("li");
    li.id="listItem"+todos.length;
   
    // 2. create label
    const label = document.createElement("label");
    label.id="todo"+todos.length;
    label.style.width="80%";
    label.innerText=text;

    // create edit button/
    const ebtn = document.createElement("button");
    ebtn.id="editBtn"+todos.length;
    ebtn.classList.add("btn");
    ebtn.classList.add("btn-primary");
    ebtn.innerText="Edit";
    ebtn.addEventListener("click",handleEditClick)

    // create delete button/
    const dbtn = document.createElement("button");
    dbtn.id="dBtn"+todos.length;
    dbtn.classList.add("btn");
    dbtn.classList.add("btn-danger");
    dbtn.innerText="Delete";
    dbtn.addEventListener("click",deleteToDo)

    li.appendChild(label);
    li.appendChild(ebtn);
    let span = document.createElement("span");
    span.innerHTML="&nbsp;&nbsp;"
    li.appendChild(span);
    li.appendChild(dbtn);

    const ul=document.getElementById("todoList");
    //append li to inner html of ul//
    ul.appendChild(li);
}
function handleEditClick(event){
    const button=document.getElementById(event.target.id);
    if(document.getElementById("txtbUpdate")){
        console.log("on edit mode")
        updateToDo(event);
        button.innerText="Edit";
        return;
    }
    const labelID=event.target.id.replace("editBtn","todo");
    const label=document.getElementById(labelID);
    button.innerText="Save";
    //const txtBox="<input value '"+label.innerText+"' class='form-control' type='text' id='txtBoxUpdate'/>"

     // Create a text box and add it to li.
     const txtBox = document.createElement("input");
     txtBox.type="text";
     txtBox.id="txtbUpdate";
     txtBox.value=label.innerText;
     txtBox.classList.add("form-control");
 
     console.log("textbox created");
     label.style.display="none";
     const liID=event.target.id.replace("editBtn","listItem");
     const li = document.getElementById(liID);
     console.log(li);
     li.prepend(txtBox);
}
function updateToDo(event){

    // 1. To read data of text box
    const textb = document.getElementById("txtbUpdate");
    // 2. Create a label.
    const label = document.createElement("label");
    // 3. Add data to label.
    label.innerText=textb.value;
    label.id="todo"+event.target.id.replace("editBtn","");
    label.style.width="80%";
    // 4. Add label to li.
    const liID=event.target.id.replace("editBtn","listItem");
    const li = document.getElementById(liID);
    li.replaceChild(label, textb);
}
function deleteToDo(event){
    // 1. Get Delete button and its id.
    const button = document.getElementById(event.target.id);
    // 2. Get parent li.
    const li = button.parentElement;
    // 3. remove li.
    document.getElementById("todoList").removeChild(li);
}