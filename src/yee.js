class task{
  constructor(title, description, dueDate,priority,list){
    this.title=title
    this.description=description
    this.dueDate=dueDate
    this.priority=priority
    this.list=[]
    
    }
populate(value){
  this.list.push(value)
}
    
  }


  
  


export{task}


