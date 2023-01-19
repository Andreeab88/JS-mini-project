// extragem eventlistenerul (butonul) din Dom (declaram constantele pe 
// care le apelam din fisierul html) ;
const submitButton = document.getElementById("btnSubmit");
const tasks = document.getElementById("tasks");
const messageElement = document.getElementById("message");
const clearButton = document.getElementById("btnClear");

// scriem ce vrem sa facem (event-ul) si functia (cum vrem sa 
// se realizeze event-ul);
submitButton.addEventListener("click", addTask);
tasks.addEventListener("click", handleTaskClick);
clearButton.addEventListener("click", clearList);

const greetingMessage = "Good! You have no tasks today.";

displayMessage(greetingMessage);

function clearList(){
    //selectam toate task-urile:
    const taskList = tasks.getElementsByClassName("list-group-item"); 
//iteram prin lista si sterge tot timpul primul task (stergem
// pe rand list-item'urile):
while (taskList.length>0){
    taskList[0].parentNode.removeChild(taskList[0]);
}
displayMessage(greetingMessage);
}

// functia pentru bifarea task-urilor (evenimentelor)
function handleTaskClick(event){
    const style = event.target.style;
   if(!style.textDecoration){
    style.textDecoration = "line-through";
   }else{
     style.textDecoration = "";
   }
}


function addTask(){
    const newTask = document.getElementById("newTask");
    if (inputIsValid(newTask.value)){
     tasks.innerHTML += '<li class = "list-group-item">' + newTask.value + '</li>';
     // sau folosind string literal: 
     //tasks.innerHTML += '<li class = "list-group-item">${newTask.value}</li>';
     newTask.value = "";
    //  cand sunt task-uri, msj "Good! You have no tasks today."
    //  trebuie sa fie hidden;
     messageElement.style.visibility = "hidden";
} else{
    displayMessage("Please provide non empty input!");
}
}
 
function displayMessage(message){
 messageElement.innerText = message;
//  mesajul "Good! You have no tasks today." sa fie vizibil
//  doar cand nu sunt task-uri;
  messageElement.style.visibility = "visible"; 
}


function inputIsValid(input){
    if (input){
       return true;
    }
    return false;
}