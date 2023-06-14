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
    createtask()
   
})
var i;
function createtask(){
    for(let i=array.length-1;i<array.length;i++){
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

        localStorage.setItem(`title${i}`,activity.title);
        localStorage.setItem(`description${i}`,activity.description);
        localStorage.setItem(`due date${i}`,activity.dueDate);
        localStorage.setItem(`priority${i}`,activity.priority);

        function display(){
            tcell.textContent=localStorage.getItem(`title${i}`);
            dcell.textContent=localStorage.getItem(`description${i}`);
            ucell.textContent=localStorage.getItem(`due date${i}`);
            pcell.textContent=localStorage.getItem(`priority${i}`);
        }
        display()
        
        
    
    
    
    
    }}
  





