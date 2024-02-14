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