// import React,{useState,useEffect} from 'react'
// import axios from "axios";
// import {Form,Table,Button} from "react-bootstrap"

// const Aboutus = () => {
//   const[name,setName]=useState("");
//   const [data,setData]=useState([]);
//   const [errorMsg,setErrorMsg]=useState('');

//   useEffect(()=>{
//     handleBackendData();
//   },[]);

//   const handleBackendData =()=>{
//     // e.preventDefault();
//     // if(postId){
// axios.get(`http://localhost:3001/Ports`)
// .then((response)=>{
// setData(response.data) ;
// setErrorMsg("")
// })
// .catch((error)=>console.log(error))
// // }else{
// //     setErrorMsg('Please give input');
// //     setData([]);
// // }
//     }

//     const handleNewPost=(e)=>{
//       e.preventDefault();
//      const formData = {"name":name};
//      axios.post("http://localhost:3001/Ports",formData)
//      .then((response)=>{console.log(response)
//     handleBackendData();
//     setName("");
//     })
//      .catch((error)=>console.log(error))
//     }

//     const handleDelete=(id)=>{
// axios.delete(`http://localhost:3001/Ports/${id}`)
// .then((response)=>{console.log(response)
//   handleBackendData();
//   })
//    .catch((error)=>console.log(error))
//   }

//   return (
//     <div>
    
//      <Form onSubmit={handleNewPost}>
//       <Form.Group className="mb-3" controlId="name">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" placeholder=" Enter Name" value={name} onChange={(e)=>setName(e.target.value)} />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Add New Post
//       </Button>
//     </Form> 
//        {data?.length!==0 ?(
//       <Table striped bordered hover>
//     <thead>
//       <tr>
//         <th>Id</th>
//         <th>Name</th>
//         <th colSpan={2}></th>
//       </tr>
//     </thead>
//     <tbody>
//       {data.map((index)=>(
//       <tr key={index.id}>
//       <td>{index.id}</td>
//       <td>{index.name}</td>
//       <td colSpan={2}>
//       <Button variant="warning">Edit</Button> {''}
//       <Button variant="danger" onClick={()=>handleDelete(index.id)} >Delete</Button></td>
//     </tr>  
//       ))}
//       </tbody>
//       </Table>

//     ):(<h2>{errorMsg}</h2>)}
// </div>
//   )
// }

// export default Aboutus

import React from 'react';
import { useNavigate } from 'react-router-dom';


const Aboutus = () => {
    const Navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        Navigate("/contact")
    }
  return (
    <div>
    <section className="about-us py-5 " id="about-us">
    <div className="container mt-5">
	<div className="row">
		<div className="col-md-6">
		    <h1 className='text-primary'>Welcome!</h1>
		    <h2>Know More About Us</h2>
		    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam, itaque omnis voluptatem inventore eum atque sequi ex minus commodi maiores nihil culpa ratione. Ex saepe alias numquam nesciunt porro.</p>
            <form  onSubmit={handleSubmit}>
            <button type="button" className="btn btn-light text-primary me-2">Let's Know More</button>
            <button type="submit" className="btn btn-primary ms-2">Contact Us</button>
            </form>
        </div>
	</div>
</div>
</section>
</div>
  )
}

export default Aboutus