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
            Navigate('/',{state:{theName:data.name,theEMail:data.email}});
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