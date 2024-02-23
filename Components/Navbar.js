import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NavUserContext } from '../RouterComponent';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(NavUserContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogOut = () => {
    if (isAuth) {
      localStorage.removeItem('username');
      setIsAuth(false);
    } else {
      navigate("/login");
    }
    setIsNavOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Jack's Web</Link>
        <button className="navbar-toggler" type="button" onClick={handleToggleNav}>
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarText"> */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'd-block' : ''}`} id="navbarText">

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active" onClick={() => setIsNavOpen(false)}>Home</Link>
            </li>
            {isAuth && (
              <>
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link active" onClick={() => setIsNavOpen(false)}>AboutUS</Link>
                </li>
                <li className="nav-item">
                  <Link to="/career" className="nav-link active" onClick={() => setIsNavOpen(false)}>Career</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link active" onClick={() => setIsNavOpen(false)}>Contact</Link>
                </li>
                <li className="nav-item">
                  <Link to="/todo" className="nav-link active" onClick={() => setIsNavOpen(false)}>ToDo List</Link>
                </li>
              </>
            )}
            {!isAuth && (
              <li className="nav-item">
                <Link to="/signup" className="nav-link active" onClick={() => setIsNavOpen(false)}>Signup</Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/login" className="nav-link active" onClick={handleLogOut}>{isAuth ? "Logout" : "Login"}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
