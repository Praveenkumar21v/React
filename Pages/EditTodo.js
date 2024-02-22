import axios from 'axios';
import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const EditTodo = () => {
const location=useLocation();
const navigate=useNavigate();  
const {id,todo}=location?.state ;
const [updateTodo,setUpdateTodo]=React.useState(todo ?? ""); // nullish coalescing operator, which returns the right-hand operand when the left-hand operand is null or undefined, and otherwise, it returns the left-hand operand.So, in this case, if todo is null or undefined, updateTodo will be an empty string; otherwise, it will be the value of todo.
 
const handleEditTodo=(e)=>{
    e.preventDefault();
                axios.patch(`http://localhost:3001/Json/${id}`,{todo:updateTodo})

                .then((response)=>{
                    if(response.status ===200){
                     console.log(response.data);
                     navigate('/todo')
                 }
                     })
                 .catch((error)=>console.log(error));
}

return (
    <form className="formContainer" onSubmit={handleEditTodo}>
      <input
        type="text"
        value={updateTodo}
        placeholder="Enter a Todo"
        onChange={(e) => setUpdateTodo(e.target.value)}
      />
      <Button type="submit" variant="warning">Update Todo</Button>
    </form>
  );
}

export default EditTodo;