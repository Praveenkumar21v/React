// import React,{useState,useEffect} from 'react'

// const List = ({getItems}) => {
//   const [items,setItems]= useState([]);
//   useEffect(()=>{
//     console.log("updating...");
//     setItems(getItems());
//   },[getItems]);
//   return (
//     <ul>
//       {items?.map((value)=>(
//         <li key={value}> {value} </li>
//       ))}
//     </ul>
//   )
// }

// export default List

import React,{useState,useEffect} from 'react'

const List = ({getItems}) => {
  const [items,setItems]= useState([]);
  useEffect(()=>{
    console.log("updating...");
    setItems(getItems);
  },[getItems]);
  return (
    <ul>
      {items?.map((value)=>(
        <li key={value}> {value} </li>
      ))}
    </ul>
  )
}

export default List