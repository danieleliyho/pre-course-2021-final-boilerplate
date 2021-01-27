let add = document.getElementById('add-button');
// let todoList = document.getElementsByTagName('ul')
let todoList = document.getElementById('todo-list');
let input = document.getElementById("text-input");
let priority = document.getElementById("priority-selector")


add.addEventListener("click",function(){
    getNewTask ();
})


function getNewTask(){
    let inputValue = input.value;
    let priorityValue = priority.value;
    let text = document.createTextNode(inputValue);
    let priorityValue1 = document.createTextNode(priorityValue);
    let date = document.createTextNode(new Date());
    if(inputValue === ""){
        alert("please write some thing");
    }else{
    let divContainer = document.createElement("div");
    let divDate = document.createElement("div");
    let divPriority = document.createElement("div");
    let divText = document.createElement("div");
    divContainer.className = "todo-container";
    divDate.className = "todo-created-at";
    divPriority.className = "todo-priority";
    divText.className = "todo-text";
    todoList.appendChild(divContainer);
    divContainer.appendChild(divDate);
    divContainer.appendChild(divPriority);
    divContainer.appendChild(divText);
    divText.appendChild(text)
    divPriority.appendChild(priorityValue1)
    divDate.appendChild(date)

}input.value = "";
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