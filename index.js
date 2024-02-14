import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import SignUp from './Pages/Signup';
import Navbar from './Components/Navbar';
import Nopage from './Pages/Nopage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='*' element={<Nopage/>}/>
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

