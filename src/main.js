let add = document.getElementById('add-button');
// let todoList = document.getElementsByTagName('ul')
let todoList = document.getElementById('todo-list');
let input = document.getElementById("text-input");


add.addEventListener("click",function(){
    getNewTask ()
})


function getNewTask(){
    let divContainer = document.createElement("div");
    let divDate = document.createElement("div");
    let divPriority = document.createElement("div");
    let divText = document.createElement("div");
    divContainer.className = "todo-container";
    divDate.className = "todo-created-at";
    divPriority.className = "todo-priority";
    divText.className = "todo-text";
}
// function getNewTask () {
//     let li= document.createElement("li");
//     let inputValue = input.value;
//     let text = document.createTextNode(inputValue);
//     li.appendChild(text);
//     if(inputValue === ""){
//         alert("write some thing");
//     }else{
//     todoList.appendChild(li);
//     }
//     input.value = "";
// }