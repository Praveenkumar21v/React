import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >Jack's Web</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
        <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/aboutus">AboutUS</a> */}
          <Link to="/aboutus" className="nav-link active">AboutUS</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/contact">Contact</a> */}
          <Link to="/contact" className="nav-link active">Contact</Link>
</li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/login">Login</a> */}
          <Link to="/login" className="nav-link active">Login</Link>
</li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/signup">SignUp</a> */}
          <Link to="/signup" className="nav-link active">SignUp</Link>
</li>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar