const API_KEY = "$2b$10$zLuJE2T3.ovG2QpAVhxQueIRoUDZB.V6UzCnbfCkAkE/y8XGtXq/.";
const DB_NAME = "my-todo";

function createTodo(data){
  for(let row of data){
     getNewTask(row)
  }
  counter()
 
}

// Gets data from persistent storage by the given key and returns it
async function getPersistent(key) {

  let options ={ 
  method : 'GET',
  headers: { 
    "X-Master-Key" : "$2b$10$zLuJE2T3.ovG2QpAVhxQueIRoUDZB.V6UzCnbfCkAkE/y8XGtXq/."
  },
  // body : JSON.stringify(data)
  };
  fetch("https://api.jsonbin.io/v3/b/60174a060ba5ca5799d1e474/latest",options)
  .then(response => response.json()).then(data => createTodo(data.record['my-todo']))
  
  return [];
}
getPersistent(API_KEY)

// Saves the given data into persistent storage by the given key.
// Returns 'true' on success.
async function setPersistent(data) {
  const putMethod = {
    method: 'PUT', // Method itself
    headers: {
     'Content-type': 'application/json' // Indicates the content 
    },
    body: JSON.stringify(data) // We send data in JSON format
   }
   
   // make the HTTP put request using fetch api
   fetch("https://api.jsonbin.io/v3/b/60174a060ba5ca5799d1e474", putMethod)
   .then(response => response.json())
   .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
   .catch(err => console.log(err)) 
  return true;
}
let someData = [{
  'lama': 'dasd',
  'dan': 'dasd'}]
add.addEventListener('click',function(){
  setPersistent(getInfo())
});
