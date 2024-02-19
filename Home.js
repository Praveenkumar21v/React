import React,{useState} from 'react'

import { Table } from 'react-bootstrap'
import Career from './Career';

const Home = () => {
const [data,setData]=useState([]);

const fetchData=(value)=>{
    setData(value);

}
  return (
    <div>
        <Career handleParent={fetchData}/>
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

      ):(<h2> No rec found</h2>)}</div>
  )
}

export default Home;