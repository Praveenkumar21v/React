import React, { useState } from 'react'

const LoginFunc = () => {
    const [emailText,setEmailText]=useState('');
    const [password,setPassword]=useState('');
    const [errormsg,setErrorMsg]=useState('');
  
  const handleSubmit=(event)=>{
    event.preventDefault();

if(emailText==="" || password==="" ){
    setErrorMsg ( "Please provide both Email and Password");
    
}
else{
  setErrorMsg(`username:${emailText} and password: ${password}`); 
}
}
return (
    <div>  
    <form className="formContainer" onSubmit={handleSubmit}>
    <div className="form-group ">
      <label htmlFor="emailText">Email address</label>
      <input
        type="email"
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
      <label htmlFor="password">Password</label>
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
    
  export default LoginFunc;
