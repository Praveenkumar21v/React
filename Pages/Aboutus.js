import React,{useState,useEffect} from 'react'
import axios from "axios";
import {Form,Table,Button} from "react-bootstrap"

const Aboutus = () => {
  const[name,setName]=useState("");
  const [data,setData]=useState([]);
  const [errorMsg,setErrorMsg]=useState('');

  useEffect(()=>{
    handleBackendData();
  },[]);

  const handleBackendData =()=>{
    // e.preventDefault();
    // if(postId){
axios.get(`http://localhost:3001/Ports`)
.then((response)=>{
setData(response.data) ;
setErrorMsg("")
})
.catch((error)=>console.log(error))
// }else{
//     setErrorMsg('Please give input');
//     setData([]);
// }
    }

    const handleNewPost=(e)=>{
      e.preventDefault();
     const formData = {"name":name};
     axios.post("http://localhost:3001/Ports",formData)
     .then((response)=>{console.log(response)
    handleBackendData();
    setName("");
    })
     .catch((error)=>console.log(error))
    }

    const handleDelete=(id)=>{
axios.delete(`http://localhost:3001/Ports/${id}`)
.then((response)=>{console.log(response)
  handleBackendData();
  })
   .catch((error)=>console.log(error))
  }

  return (
    <div>
    
     <Form onSubmit={handleNewPost}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder=" Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add New Post
      </Button>
    </Form> 
       {data?.length!==0 ?(
      <Table striped bordered hover>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th colSpan={2}></th>
      </tr>
    </thead>
    <tbody>
      {data.map((index)=>(
      <tr key={index.id}>
      <td>{index.id}</td>
      <td>{index.name}</td>
      <td colSpan={2}>
      <Button variant="warning">Edit</Button> {''}
      <Button variant="danger" onClick={()=>handleDelete(index.id)} >Delete</Button></td>
    </tr>  
      ))}
      </tbody>
      </Table>

    ):(<h2>{errorMsg}</h2>)}
</div>
  )
}

export default Aboutus