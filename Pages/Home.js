

import React from 'react';
import {useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const Home = () => {
    const Navigate=useNavigate();
    const location = useLocation();
    console.log(location);

    const handleSubmit=(event)=>{
        event.preventDefault();
        Navigate("/aboutus")
    }
    return  <div className='Container text-center' >
        <h1 className='text-center mt-5'>Hi Welcome to <span className='text-primary'> Jack's Web </span></h1> 
        <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur magnam, itaque omnis voluptatem</p>
        <form  onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-primary me-1">Get Started</button>
        <button type="button" className="btn btn-light text-primary ms-1">Watch Tutorial</button>
        </form>
       
        </div>

//   return  <div>Home {location.state.email}</div>
  
}

export default Home
