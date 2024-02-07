import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


function App2({name,version}){
    return (
        <div className="container-fluid">
            <h1 className="border border-4 border-dark">This is Function 2</h1>
            <h2 className="bg-success text-white">Name: {name} and Version: {version}</h2>
        </div>
    )
}
export default App2;