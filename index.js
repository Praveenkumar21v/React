import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import LoginClass from './class/loginClass';
// import Home from './class/home';
// import Contact from './function/contact';
// import ListOfItems from './function/ListOfItems';
// import Employee from './function/Employee';
import "bootstrap/dist/css/bootstrap.min.css"
import LoginFunc from './function/loginFunc';
// import LifeCycle from './class/Lifecycle';
// import LC from './function/Lc';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
{/* <Home/>
<Contact />
<ListOfItems/>
<Employee/>
<LifeCycle name={'Chandu'}/>
<LC/> */}
{/* <LoginClass/> */}
<LoginFunc/>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

