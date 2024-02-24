// // import React,{useState} from 'react'

// // import { Table } from 'react-bootstrap'
// // import Career from './Career';

// // const Home = () => {
// // const [data,setData]=useState([]);

// // const fetchData=(value)=>{
// //     setData(value);

// // }
// //   return (
// //     <div>
// //         <Career handleParent={fetchData}/>
// //                  {data?.length!==0 ?(
// //         <Table striped bordered hover>
// //       <thead>
// //         <tr>
// //           <th>Id</th>
// //           <th>UserId</th>
// //           <th>Title</th>
// //           <th>Body</th>
// //         </tr>
// //       </thead>
// //       <tbody>
// //         {data.map((index)=>(
// //         <tr key={index.id}>
// //         <td>{index.id}</td>
// //         <td>{index.userId}</td>
// //         <td>{index.title}</td>
// //         <td>{index.body}</td>
// //       </tr>  
// //         ))}
// //         </tbody>
// //         </Table>

// //       ):(<h2> No rec found</h2>)}</div>
// //   )
// // }

// // export default Home;

// // import React, { useCallback, useState } from 'react';
// // import List from "./List"

// // const Home = () => {
// //   const[counter,setCounter]=useState(0);
// //   const[bgColor,setBgColor]=useState(false)
// // const getItems =useCallback(()=>{
// //    return [counter,counter+1,counter+2]
// // },[counter])

// //   return (
// //     <div style={{background: bgColor ? "red" : "green"}}>
// //       <input type='number' value={counter} onChange={(e)=>setCounter(e.target.value)}/>
// //       <button onClick={()=>setBgColor(!bgColor)}>Theme</button>
// //    <List getItems={getItems}/>
// //     </div>
// //   )
// // }

// // export default Home

// // import React, { useMemo, useState } from 'react';
// // import List from "./List"

// // const Home = () => {
// //   const[counter,setCounter]=useState(0);
// //   const[bgColor,setBgColor]=useState(false)
// // const getItems =(counter)=>{
// //    return [counter,counter+1,counter+2]
// // }

// // const counterValues = useMemo(()=>getItems(counter),[counter]);

// //   return (
// //     <div style={{background: bgColor ? "red" : "green"}}>
// //       <input type='number' value={counter} onChange={(e)=>setCounter(e.target.value)}/>
// //       <button onClick={()=>setBgColor(!bgColor)}>Theme</button>
// //    <List getItems={counterValues}/>
// //     </div>
// //   )
// // }

// // export default Home

import React, { useMemo, useState } from "react";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [userName, setUserName] = useState("");
  const factorialLogic = (value) => {
    console.log("Factorial");
    let result = 1;
    for (let index = 1; index <= value; index++) {
      result *= index;
    }
    return result;
  };
  const factorialValue = useMemo(() => factorialLogic(counter), [counter]);
  return (
<div>
      <h1>
        The Factorial of {counter} is {factorialValue}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>{" "}
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <hr />
      <input
        type="name"
        value={userName}
        placeholder="Enter Name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <h1>My Name is : {userName}</h1>
    </div>  )
}

export default Home

