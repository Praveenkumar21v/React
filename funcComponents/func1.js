import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const App1=(props)=>{
    return (
<div className="container">
    <h1>This is App1</h1>
    <h2 className="bg-primary text-white">{props.name}</h2>

</div>
    )
}
export default App1;