import React,{useEffect, useState} from "react";

const Signin = () => {
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        password:"",
        Gender:"",
        agreeTerms:false,
    });

    const [isFormFilled,setIsFormFilled]=useState(false);

const handleChange=(event)=>{
const {name,value,type,checked} = event.target;
const newValue = type==="checkbox" ? checked : value;

setFormData( {...formData,[name]: newValue})
}

useEffect(()=>{
    const {firstName,lastName,password,Gender,agreeTerms}=formData
    setIsFormFilled(firstName && lastName && password && Gender && agreeTerms) 
}, [formData])

const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData)
}
  return (
    <div>
      <h1>Sign Up Form</h1>
      <form className="formContainer"  onSubmit={handleSubmit}>
        <div className="form-group ">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="secondName">Second Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-check ">
          <label htmlFor="Gender"> Gender</label>
          <input
            type="radio"
            name="Gender"
            id="male"
            className="form"
            value='male'
            checked={formData.Gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="Male" className="form-check-label">
            Male
          </label>
          <input
            type="radio"
            name="Gender"
            id="female"
            className="form"
            value="female"
            checked={formData.Gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor="Female" className="form-check-label">
            Female
          </label>
        </div>
        <div className="form-check">
          <input type="Checkbox" id="agree" name="agreeTerms" className="form"
                     checked={formData.agreeTerms}
                     onChange={handleChange} />
          Accept terms & Conditions
        </div>
        <button disabled={!isFormFilled} type="submit" className="btn btn-primary">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Signin;
