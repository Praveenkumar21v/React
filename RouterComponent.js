import React, { createContext, useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import SignUp from './Pages/Signup';
import Navbar from './Components/Navbar';
import Nopage from './Pages/Nopage';
import ToDoList from './Pages/ToDoList';
import './TodoList.css'
import EditTodo from './Pages/EditTodo';

export const NavUserContext=createContext(null)

const RouterComponent = () => {
    // const[isAuth,setIsAuth]=useState(false)
    const isLoggedIn= localStorage.getItem('username') !==null;
    const[isAuth,setIsAuth]=useState(isLoggedIn?? false)

    const UserContext={isAuth,setIsAuth}
  return (
    
        <NavUserContext.Provider value={UserContext} >
        <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    {isAuth && (
    <>
     <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/todo' element={<ToDoList/>}/>
    <Route path='/todo/:id' element={<EditTodo/>}/>
    </>
    )}
   {!isAuth  &&(
    <>
    <Route path='/signup' element={<SignUp/>}/>

    </>
   )}
   
    <Route path='/login' element={<Login/>}/>

     <Route path='*' element={<Nopage/>}/>
    </Routes>
    </BrowserRouter>
    </NavUserContext.Provider>
    
  )
}

export default RouterComponent;
