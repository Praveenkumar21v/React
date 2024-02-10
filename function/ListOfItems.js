import React from 'react'

const ListOfItems= ()=>{
    const todoList=[
        "Open Eyes",
        "Browse Mobile",
        "Listen to Class",
        "Brush teeth",
        "Bath",
        "Practice Class",
    ]
return (
    <div>
         <h1>To Do List</h1>
         {todoList.length > 0 ? (
           <ul>{

            todoList.map((todoItem,index)=>(
                <li key={index}>{todoItem}</li>  
                ))
           }
           </ul>
         ) : <h1>No Items</h1>}
    </div>
)
}
export default ListOfItems;