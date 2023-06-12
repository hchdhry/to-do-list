import { task } from "./yee"
import make from "./array"

const button=document.querySelector("button")

button.addEventListener("click",function(event){
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due date').value;
    const priority = document.getElementById('priority').value;
    const yee =new task(title,description,dueDate,priority)
    console.log(yee)
}

)

const array=[];
function add(entry){
    array.push(entry)
}


