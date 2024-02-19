import React,{useState} from 'react';
import axios from "axios";
import {Button, Table} from "react-bootstrap"

const Career = () => {
  const [data,setData]=useState([]);

  const handleData =()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>  setData(response.data))

  .catch((error)=>console.log(error))
  }

  return (
    <div>
      <Button type='submit' variant="warning" onClick={handleData}> Fetch Data</Button>
      {data?.length!==0 ?(
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>UserId</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {data.map((index)=>(
        <tr key={index.id}>
        <td>{index.id}</td>
        <td>{index.userId}</td>
        <td>{index.title}</td>
        <td>{index.body}</td>
      </tr>  
        ))}
        </tbody>
        </Table>

      ):(<h2> No rec found</h2>)}

    </div>
  )
}

export default Career;
