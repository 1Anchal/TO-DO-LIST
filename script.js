const textinput=document.getElementById("textinput");
const addbutton=document.getElementById("addbutton");
const todolist=document.getElementById("todolist");

addbutton.addEventListener("click",()=>{
    const addtexts=textinput.value;

    if(addtexts!==""){
        const newtodoItem=document.createElement("li");
        newtodoItem.innerText=addtexts;
        const deletebtn=document.createElement("button");
        deletebtn.innerText="X";

        deletebtn.classList.add("delete-todo-btn");
        deletebtn.addEventListener("click",()=>{
            newtodoItem.remove();

        });
        newtodoItem.appendChild(deletebtn);
        todolist.appendChild(newtodoItem);
        textinput.value="";
    }
});