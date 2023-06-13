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
    array.push(yee)
   
})

const array=[];

for(i=0;i>array.length;i++){
    row=document.createElement('tr')
    tcell=document.createElement('td')
    dcell=document.createElement('td')
    ucell=document.createElement('td')
    pcell=document.createElement('td')
    
    
   row.classlist.add("row")



}

