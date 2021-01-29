let add = document.getElementById('add-button');
// let todoList = document.getElementsByTagName('ul')
let todoList = document.getElementById('todo-list');
let input = document.getElementById("text-input");
let priority = document.getElementById("priority-selector")
let count = 0
let divContainer = document.getElementsByClassName("todo-container");


add.addEventListener('click',function(){
    getNewTask();
    counter();
})
let sort = document.getElementById("sort-button");

sort.addEventListener("click",function(){
sorter()
})

function getDate(){
    let date;
    date = new Date();
    date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2) + ' ' + 
        ('00' + date.getUTCHours()).slice(-2) + ':' + 
        ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
        ('00' + date.getUTCSeconds()).slice(-2);
        return date
    }

function getNewTask(){
    let inputValue = input.value;
    let priorityValue = priority.value;
    let text = document.createTextNode(inputValue);
    let priorityText = document.createTextNode(priorityValue);
    let dateSql = document.createTextNode(getDate());
    let deleterText = document.createTextNode("delete")
    if(inputValue === ""){
        alert("please write some thing");
    }else{
        let divContainer = document.createElement("div");
        let divDate = document.createElement("div");
        let divPriority = document.createElement("div");
        let divText = document.createElement("div");
        let deleterDiv = document.createElement("div");
        let deleter = document.createElement("button");
        divContainer.className = "todo-container";
        divDate.className = "todo-created-at divInfo";
        deleterDiv.className = "deleter divInfo";
        divPriority.className = "todo-priority divInfo";
        divText.className = "todo-text divInfo";
        todoList.appendChild(divContainer);
        divContainer.appendChild(divDate);
        divContainer.appendChild(deleterDiv);
        deleterDiv.appendChild(deleter);
        deleter.appendChild(deleterText);
        divContainer.appendChild(divPriority);
        divContainer.appendChild(divText);
        divText.appendChild(text)
        divPriority.appendChild(priorityText)
        divDate.appendChild(dateSql)
}input.value = "";
}
function sorter(){
    let divContainer = document.getElementsByClassName("todo-container");
    let priority = document.getElementsByClassName("todo-priority");

    console.log(priority[0].textContent)
    let temp = 0;
    for(let i = 0; i<=divContainer.length; i++){
        for(let j = 0; j<divContainer.length-1; j++){
            if(priority[j].textContent<priority[j+1].textContent && priority[j].textContent!==priority[j+1].textContent){
                temp = divContainer[j];
                divContainer[j] = divContainer[j+1];
                divContainer[j+1] = temp;
                todoList.appendChild(divContainer[j]);
                
            }
        }
    }

    
    // for(let x = 0; x<divContainer.length; x++){
    //     todoList.appendChild(divContainer[x]);
    //     console.log(priority.value)
    // }
}
function counter(){
        document.querySelector("#counter").innerHTML = divContainer.length;
}
function counterOnLoad(){
        document.querySelector("#counter").innerHTML = localStorage.length/4;
}
window.onload = counterOnLoad();

let date = document.getElementsByClassName("todo-created-at")
let todoContainer = document.getElementsByClassName("todo-container")
let priorityText = document.getElementsByClassName("todo-priority")
let text = document.getElementsByClassName("todo-text")
for(let j = 0; j<localStorage.length/4; j++){
    let storedDate = localStorage.getItem("dateInputKey"+j)
    let storedPriority = localStorage.getItem("priorityTextKey"+j)
    let storedText = localStorage.getItem("textKey"+j)
    let storedContainer = localStorage.getItem("todoContainer"+j)
    if(todoContainer){
        let divContainer = document.createElement("div");
        let divDate = document.createElement("div");
        let divPriority = document.createElement("div");
        let divText = document.createElement("div");
        let deleterText = document.createTextNode("delete")
        let deleterDiv = document.createElement("div");
        let deleter = document.createElement("button");
        divContainer.className = "todo-container";
        deleterDiv.className = "deleter divInfo";
        divDate.className = "todo-created-at divInfo";
        divPriority.className = "todo-priority divInfo";
        divText.className = "todo-text divInfo";
        
        todoList.appendChild(divContainer)
        divDate.innerHTML += `${storedDate}`;
        divContainer.appendChild(divDate)
        divPriority.innerHTML += `${storedPriority}`;
        divContainer.appendChild(divPriority)
        divText.innerHTML += `${storedText}`;
        divContainer.appendChild(divText);
        divContainer.appendChild(deleterDiv);
        deleterDiv.appendChild(deleter);
        deleter.appendChild(deleterText);
        deleterText.innerHTML += "delete";
        location.reload
}
}

const saveToLocalStorage = () => {
    for(let i = 0; i<divContainer.length; i++){
        localStorage.setItem("dateInputKey"+i,date[i].textContent)
        localStorage.setItem("priorityTextKey"+i,priorityText[i].textContent)
        localStorage.setItem("textKey"+i,text[i].textContent)
        localStorage.setItem("todoContainer"+i,todoContainer[i].textContent)
    }
}

add.addEventListener('click',saveToLocalStorage);




