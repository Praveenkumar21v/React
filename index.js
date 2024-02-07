import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Jack from './classComponents/class1';
import Virat from './classComponents/class2';
import Klaus from './classComponents/class3';

import App1 from './funcComponents/func1';
import App2 from './funcComponents/func2';
import App3 from './funcComponents/func3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
     <Jack name="Jack Sparrow"/>
     <Virat name="Virat" age='21'/>
     <Klaus name='Klaus Michaelson' age='25' salary="10000" />
     <App1 name="Function1"/>
    <App2  name="Function2" version='2.0.1'/>
    <App3  name="Function3" version='3.0.1' year='2024'/>
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

