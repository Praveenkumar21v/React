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

// import React, { useCallback, useState } from 'react'
// import List from './List';

// const Home = () => {
//   const [number,setNumber]=useState(0);
//   const [bgColor,setbgColor]=useState(false)
 
//   const getItems=useCallback(()=>{
//     return [number,number+1,number+2];
//   },[number]);

//   const handleButtonClick = () => {
//     setbgColor(!bgColor);
//   };
  
//   return (
//     <div>
//        <form>
//         <input type='text' value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}/>
//        <button style={{background:bgColor ? "#fff" : "#000"}} type='submit'  onClick={handleButtonClick}>Theme</button>
//        </form>
//        <List getItems={getItems()}/>

//     </div>
//   )
// }

// export default Home;