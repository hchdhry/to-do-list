import { task } from "./yee"
import make from "./array"

const button=document.querySelector("button")
const project= document.getElementById("project-list")

const array=[];
button.addEventListener("click",function(event){
    event.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due date').value;
    const priority = document.getElementById('priority').value;
    const yee =new task(title,description,dueDate,priority)
    array.push(yee)
    console.log(array[2])
    createtask()
   
})

function createtask(){
    for(let i=0;i<1;i++){
        var activity=array[i];
        console.log(activity);
       
        const row = document.createElement('tr');
        const tcell = document.createElement('td');
        const dcell = document.createElement('td');
        const ucell = document.createElement('td');
        const pcell = document.createElement('td');
    
         
        project.appendChild(row);
        row.appendChild(tcell);
        row.appendChild(dcell);
        row.appendChild(ucell);
        row.appendChild(pcell);
    
        tcell.textContent=activity.title;
        dcell.textContent=activity.description;
        ucell.textContent=activity.dueDate;
        pcell.textContent=activity.priority;
        
    
    
    
    
    }}





