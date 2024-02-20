import React from 'react';
import axios from 'axios';
import { Table,Button} from 'react-bootstrap';
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const ToDoList = () => {
    const [todo,setTodo]=React.useState('');
    const[todoList,settodoList]=React.useState([]);
const navigate=useNavigate();
const fetchTodoList=()=>{
    axios.get("http://localhost:3001/Json")
    .then((response)=>{settodoList(response.data)}).catch((error)=>console.log(error))
}

    React.useEffect(()=>{
        fetchTodoList();
    }, [])

    const handleaddTodo =(e)=>{
    e.preventDefault();

if(!todo){
    alert('Please add todo');
    return;
}
axios.post("http://localhost:3001/Json",{
    todo:todo,
    isCompleted:false
}).then((response)=>{
   if(response.status ===201){
    console.log(response.data);
fetchTodoList();
setTodo('');
}
    })
.catch((error)=>console.log(error));
    }

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:3001/Json/${id}`)
        .then((response)=>{
            if(response.status ===200){
             console.log(response.data);
         fetchTodoList();
         }
             })
         .catch((error)=>console.log(error));
             }
    
             const handleEdit=(id)=>{
              navigate(`/todo/${id}`, { state: { id, todo} });
              
                // const formData = {isCompleted : true}
                // // axios.patch(`http://localhost:3001/Json/${id}`,formData)
                // axios.put(`http://localhost:3001/Json/${id}`,formData)

                // .then((response)=>{
                //     if(response.status ===200){
                //      console.log(response.data);
                //  fetchTodoList();
                //  }
                //      })
                //  .catch((error)=>console.log(error));
                    }
             
  return (
    <div className='divContainer'>
        <h1>ToDoList</h1>
        <form className='formContainer' onSubmit={handleaddTodo}>
            <input type='text' value={todo} placeholder='Enter a Todo' onChange={(e)=>setTodo(e.target.value)}/>
       <Button type="submit" >Add Todo</Button>
        </form>
        <Table striped bordered hover variant='dark' >
           <thead style={{textAlign:"center"}}>
            <tr>
                <th>ID</th>
                <th>Todo</th>
                <th>completed?</th>
                <th></th>
                <th></th>
            </tr>
            </thead> 
<tbody style={{textAlign:"center"}}>
   {
    todoList.map(({id,todo,isCompleted})=>(
        <tr key={id}>
        <td>{id}</td>
        <td >{todo}</td>
    <td>{isCompleted ? "yes" : "no" }</td>

        {/* <td ><FaUserEdit  size={30} onClick={()=>handleEdit(id)}/></td> */}
        <td ><FaUserEdit  size={30} onClick={()=>handleEdit(id,todo,isCompleted)}/></td>
        <td><MdDelete size={30} onClick={()=>handleDelete(id)}/></td>
    </tr>
    ))
   }
</tbody>

        </Table>
    </div>
  )
}

export default ToDoList