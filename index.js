import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Jack from './classComponent/C1';
import Virat from './classComponent/C2';
import Chandu from './classComponent/C3';

import App from './FuncComponent/F1';
import App1 from './FuncComponent/F2';
import App2 from './FuncComponent/F3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Jack/>);
root.render(<Chandu/>);
root.render(<Virat/>);
root.render(<App/>);
root.render(<App1/>);
root.render(<App2/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
