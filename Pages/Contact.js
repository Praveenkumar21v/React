// import React,{useState} from 'react';
// import axios from "axios";
// import {Button, Table} from "react-bootstrap"

// const Contact = () => {
//   const [data,setData]=useState([]);
//   const [postId,setPostId]=useState('');
//   const [errorMsg,setErrorMsg]=useState('');

//   const handleData =(e)=>{
//     e.preventDefault();
//     if(postId){
//         axios
//         // .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//         // .get(`https://jsonplaceholder.typicode.com/posts?userId=${postId}`)
//         // .get(`https://jsonplaceholder.typicode.com/posts?userId=${postId}`,{
//             .get(`https://jsonplaceholder.typicode.com/posts`,{
//             params:{
//                 // _limit:10,
//                 _limit: postId,
//             }
//         })

//         .then((response)=>  {
//             // setData([response.data]);
//             // setData(response.data);
// response.data?.length > 1 ? setData(response.data) : setData([response.data]);
//             setErrorMsg("")
//         })
      
//         .catch((error)=>console.log(error))
//         }else{
//             setErrorMsg('Please give input');
//             setData([]);
//         }
//     }
  

//   return (
//     <div>
//         <form>
// <input type='text' name='postId' id='postId' value={postId} onChange={(e)=>setPostId(e.target.value)} />
//       <Button type='submit' variant="warning" onClick={handleData}> Fetch Data</Button>
//       </form>
//       {data?.length!==0 ?(
//         <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>Id</th>
//           <th>UserId</th>
//           <th>Title</th>
//           <th>Body</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((index)=>(
//         <tr key={index.id}>
//         <td>{index.id}</td>
//         <td>{index.userId}</td>
//         <td>{index.title}</td>
//         <td>{index.body}</td>
//       </tr>  
//         ))}
//         </tbody>
//         </Table>

//       ):(<h2>{errorMsg}</h2>)}

//     </div>
//   )
// }

// export default Contact;

import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const Navigate=useNavigate();
    const [data,setData]=useState({
        name:"",
        email:"",
        message:"",
    })
    const [isFormFilled,setIsFormFilled] = useState(false);

    const handleChange=(event)=>{
        const {name,value} = event.target;
        setData( {...data,[name]: value})
        }

        useEffect(()=>{
            const {name,email,message}=data
            setIsFormFilled(name && email && message) 
        }, [data])

        const handleSubmit = (event) =>{
            event.preventDefault();
            Navigate('/todo',{state:{theName:data.name,theEMail:data.email}});
        }
        
  return (
<div className='container'>
<section className="mb-4">
<h2 className="h1-responsive font-weight-bold text-center text-primary  my-4">Contact us</h2>
<p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you withina matter of hours to help you.</p>

    <div className="row">

        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" onSubmit={handleSubmit} >

                <div className="row">

                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <label htmlFor="name" className="text-primary"  >Your name</label>
                            <input type="text" id="name" name="name" className="form-control" value={data.name} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <label htmlFor="email" className="text-primary">Your email</label>
                            <input type="text" id="email" name="email" className="form-control" value={data.email} onChange={handleChange} />
                        </div>
                    </div>

                </div>


                <div className="row">

                    <div className="col-md-12">

                        <div className="md-form">
                        <label htmlFor="message" className="text-primary" >Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" value={data.message} onChange={handleChange}></textarea>
                        </div>

                    </div>
                </div>
                <div className="text-center text-md-left mt-2">
                <button disabled={!isFormFilled} type='submit' className="btn btn-primary" >Send</button>
            </div>

            </form>

        </div>

       

    </div>

</section>
</div>

  )

}

export default Contact