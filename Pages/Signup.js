import React,{useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();

    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        password:"",
        Gender:"",
        agreeTerms:false,
    });
const [isFormFilled,setIsFormFilled] = useState(false);

const handleChange=(event)=>{
const {name,value,type,checked} = event.target;
const newValue = type==="checkbox" ? checked : value;

//generic component way
setFormData( {...formData,[name]: newValue})
}

useEffect(()=>{
    const {firstName,lastName,password,Gender,agreeTerms}=formData
    setIsFormFilled(firstName && lastName && password && Gender && agreeTerms) 
}, [formData])

const handleSubmit = (event) =>{
    event.preventDefault();
    navigate('/login',{state:{fname:formData.firstName,lname:formData.lastName , gender:formData.Gender , checked:formData.agreeTerms}});
}
  return (
    <div className="container">
      <h1 className='text-primary text-center'>Sign Up Form</h1>
      <form className="formContainer"  onSubmit={handleSubmit}>
        <div className="form-group ">
          <label htmlFor="firstName" className='text-primary'>First Name</label>
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
          <label htmlFor="secondName" className='text-primary'>Second Name</label>
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
          <label htmlFor="password" className='text-primary'>Password</label>
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
          <label htmlFor="Gender" className='text-primary'> Gender</label>
          &nbsp;
          &nbsp;
  
  <input type="radio"
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
          &nbsp;
          &nbsp;
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
                               &nbsp;

          Accept terms & Conditions
        </div>
        <button disabled={!isFormFilled} type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
