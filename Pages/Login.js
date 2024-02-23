import React, { useState,useContext } from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import { NavUserContext } from '../RouterComponent';


const Login = () => {
const {setIsAuth}=useContext(NavUserContext);

    const navigate=useNavigate();
const location= useLocation();
console.log(location);
const defaultEmail=location.state?.email || "";
    const [emailText,setEmailText]=useState(defaultEmail);
    const [password,setPassword]=useState('');
    const [errormsg,setErrorMsg]=useState('');

  const handleSubmit=(event)=>{
    event.preventDefault();

    

if(emailText==="" || password==="" ){
    setErrorMsg ( "Please provide both Email and Password");
}else{
    setErrorMsg(""); 
// sessionStorage.setItem("usename",emailText)
localStorage.setItem("username",emailText)

setIsAuth(true);
    // window.location.pathname = "/";
    navigate('/',{state:{email:emailText}});

}
}
return (
    <div className='container'>  
        <h1 className='text-primary text-center'>Login Form</h1>
    <form className="formContainer" onSubmit={handleSubmit}>
    <div className="form-group ">
      <label htmlFor="emailText" className='text-primary'>Email address</label>
      <input
        type="text"
        className="form-control"
        id="emailText"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        value={emailText}
        onChange={(event)=>{
            setEmailText(event.target.value)
        }}

      />
    </div>
    <div className="form-group">
      <label htmlFor="password" className='text-primary'>Password</label>
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(event)=>{
            setPassword(event.target.value)
        }}
/>
    </div>
    <button type="submit" className="btn btn-primary">
      Log in
    </button>
    {errormsg && <h1>{errormsg}</h1>}
  </form>
</div>
  );

  }
    
  export default Login;