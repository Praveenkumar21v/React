// import React, { createContext } from 'react';
import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css"
// import TextControlsExample from './ReactBootstrap/form';
import RouterComponent from './RouterComponent';
// import Active from './Active';
// import ComponentA from './Usecontext/ComponentA';
// export const ComponentContext=createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterComponent/>
    // <div>
    //     <TextControlsExample/>
    // </div>
    // <Active />
/* <ComponentContext.Provider value={{name:"JackSparrow"}}>
    <ComponentA />
    </ComponentContext.Provider> */
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

