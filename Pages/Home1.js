import React from 'react'

import { Table } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location=useLocation();

const {data}=location.state || {};


  return (
    <div>
                 {data && data.length > 0 ? (
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