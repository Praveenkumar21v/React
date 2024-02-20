import React,{useState} from 'react';
import axios from "axios";
import {Button, Table} from "react-bootstrap"

const Contact = () => {
  const [data,setData]=useState([]);
  const [postId,setPostId]=useState('');
  const [errorMsg,setErrorMsg]=useState('');

  const handleData =(e)=>{
    e.preventDefault();
    if(postId){
        axios
        // .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        // .get(`https://jsonplaceholder.typicode.com/posts?userId=${postId}`)
        // .get(`https://jsonplaceholder.typicode.com/posts?userId=${postId}`,{
            .get(`https://jsonplaceholder.typicode.com/posts`,{
            params:{
                // _limit:10,
                _limit: postId,
            }
        })

        .then((response)=>  {
            // setData([response.data]);
            // setData(response.data);
response.data?.length > 1 ? setData(response.data) : setData([response.data]);
            setErrorMsg("")
        })
      
        .catch((error)=>console.log(error))
        }else{
            setErrorMsg('Please give input');
            setData([]);
        }
    }
  

  return (
    <div>
        <form>
<input type='text' name='postId' id='postId' value={postId} onChange={(e)=>setPostId(e.target.value)} />
      <Button type='submit' variant="warning" onClick={handleData}> Fetch Data</Button>
      </form>
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

      ):(<h2>{errorMsg}</h2>)}

    </div>
  )
}

export default Contact;