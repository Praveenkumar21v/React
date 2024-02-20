import React from 'react';
import axios from "axios";
import {Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


const Career = () => {
  const navigate=useNavigate();
  const handleData =(e)=>{
   
    e.preventDefault();
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((response)=>  navigate('/home',{state:{data:response.data}}))
  .catch((error)=>console.log(error))
  }

  return (
    <div>
      <Button type='submit' variant="warning" onClick={handleData}> Fetch Data</Button>
      

    </div>
  )
}

export default Career
