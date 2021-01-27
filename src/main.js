let add = document.getElementById('add-button');
// let todoList = document.getElementsByTagName('ul')
let todoList = document.getElementById('todo-list');
let input = document.getElementById("text-input");
let priority = document.getElementById("priority-selector")

add.addEventListener("click",function(){
    getNewTask ();
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
    if(inputValue === ""){
        alert("please write some thing");
    }else{
    let divContainer = document.createElement("div");
    let divDate = document.createElement("div");
    let divPriority = document.createElement("div");
    let divText = document.createElement("div");
    divContainer.className = "todo-container";
    divDate.className = "todo-created-at divInfo";
    divPriority.className = "todo-priority divInfo";
    divText.className = "todo-text divInfo";
    todoList.appendChild(divContainer);
    divContainer.appendChild(divDate);
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
    let temp = 0;
    for(let i = 0; i<divContainer.length; i++){
        for(let j = 0; j<divContainer.length-1; j++){
            if(priority[j].value<priority[j+1].value){
                temp = priority[j].value;
                priority[j].value = priority[j+1].value;
                priority[j+1].value = temp;
                
                temp = divContainer[j];
                divContainer[j] = divContainer[j+1];
                divContainer[j+1] = temp;
                
            }
        }
    }
    
    for(let x = 0; x<divContainer.length; x++){
        todoList.appendChild(divContainer[x]);
        console.log(priority.value)
    }
}

// console.log(priority[i].value)


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