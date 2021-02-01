let add = document.getElementById('add-button');
// let todoList = document.getElementsByTagName('ul')
let todoList = document.getElementById('todo-list');
let input = document.getElementById("text-input");
let priority = document.getElementById("priority-selector")
let count = 0
let divContainer = document.getElementsByClassName("todo-container");
let li = document.getElementsByTagName("li");


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

function getNewTask(data=null){
    let i_value = null
    let text = null
    let priorityText = null
    let dateSql = null
    let checkboxBool = false;
    if(!data){
        i_value = input.value
        text = document.createTextNode(i_value);
        priorityText = document.createTextNode( priority.value);
        dateSql = document.createTextNode(getDate());
    } else if (data){
        i_value = data.text
        text = document.createTextNode(i_value);
        priorityText = document.createTextNode(data.priority);
        dateSql = document.createTextNode(data.date);
        checkboxBool = Boolean(data.checkbox)
    }
    if(!i_value){
        alert("please write some thing");
    }else{
        createContainer(text,priorityText,dateSql,checkboxBool)

}input.value = "";
}
function createContainer(text,priorityText,dateSql,checkboxBool){
    let divContainer = document.createElement("div");
    let divDate = document.createElement("div");
    let divPriority = document.createElement("div");
    let divText = document.createElement("div");
    let li = document.createElement("li");
    let divDeleter = document.createElement("div");
    let divCheckbox = document.createElement("div");
    let deleter = document.createElement("button");
    let checkbox = document.createElement("input");
    let divEditer = document.createElement("div");
    let editer = document.createElement("button");
    if(checkboxBool){
        li.className = "done";
        checkbox.checked = checkboxBool
    }else{
        li.className = "";
    }
    
    deleter.className = "deleter";
    divDeleter.className = "divDeleter divInfo";
    divContainer.className = "todo-container";
    checkbox.className = "checkbox " ;
    divCheckbox.className = "divCheckbox divInfo";
    editer.className = "editer";
    divEditer.className = "divEditer divInfo";
    divDate.className = "todo-created-at divInfo";
    divPriority.className = "todo-priority divInfo";
    divText.className = "todo-text divInfo";
    todoList.appendChild(li)
    li.appendChild(divContainer);
    divContainer.appendChild(divCheckbox);
    divCheckbox.appendChild(checkbox);
    divContainer.appendChild(divDate);
    divContainer.appendChild(divPriority);
    divContainer.appendChild(divText);
    divText.appendChild(text)
    divPriority.appendChild(priorityText)
    divDate.appendChild(dateSql)
    li.appendChild(divDeleter);
    divDeleter.appendChild(deleter);
    deleter.textContent = "Remove"
    divDeleter.appendChild(editer);
    checkbox.setAttribute("type", "checkbox");
    editer.textContent = "Edit"
    checkbox.addEventListener('click',function(){
        if(!checkbox.checked){
            li.className = "";
            
        }
        else{
            li.className = "done";
        }
        counter()
        setPersistent(getInfo());
    })
    deleter.addEventListener('click',function(){
        removeRow(li)
    })
    editer.addEventListener('click',function(){
        let output = prompt("edit your todo",text.textContent);
        text.textContent = output
        setPersistent(getInfo());
    })
}
function removeRow(li){
    li.remove();
    setPersistent(getInfo());
    counter();
}

function getInfo(){
    let info = {'my-todo': []};
    for(let i = 0; i<li.length; i++){
        let checkboxValue = document.getElementsByClassName("checkbox")[i].checked;
        let inputValue = document.getElementsByClassName("todo-text")[i].textContent;
        let priorityValue = document.getElementsByClassName("todo-priority")[i].textContent;
        let dateInput = document.getElementsByClassName("todo-created-at")[i].textContent;
        info['my-todo'].push({"text" : inputValue ,
        "priority" : priorityValue ,
        "date" : dateInput ,
        "checkbox" : checkboxValue});
    
    }

    return info
}
window.addEventListener("keydown",checkKeyPress,false);
function checkKeyPress(key){
    if(key.keyCode == "13"){
        getNewTask();
        counter();
        setPersistent(getInfo());
    }
}
function sorter(){
    let divContainer = document.getElementsByClassName("todo-container");
    let priority = document.getElementsByClassName("todo-priority");

    console.log(priority[0].textContent)
    let temp = 0;
    for(let i = 0; i<=divContainer.length; i++){
        for(let j = 0; j<divContainer.length-1; j++){
            if(priority[j].textContent<priority[j+1].textContent && priority[j].textContent!==priority[j+1].textContent){
                temp = li[j];
                li[j] = li[j+1];
                li[j+1] = temp;
                todoList.appendChild(li[j]);
                
            }
        }
    }
}
function counter(){
        let done = document.getElementsByClassName("done").length
        document.querySelector("#counter").innerHTML = divContainer.length-done;
}
function toggleTheme(value) { 
  
    // Obtain the name of stylesheet  
    // as a parameter and set it  
    // using href attribute. 
    let sheets = document 
        .getElementsByTagName('link'); 

    sheets[0].href = value; 
} 



// let saveTodoInJsonBin = (todoList) => {
//     await fetch("https://api.jsonbin.io/v3/b/601453a6ef99c57c734ba864",{method:"put",headers: {"Content-Type": "application/json",},body: JSON.stringify(tasks)});

// }




