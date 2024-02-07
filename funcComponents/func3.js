import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


function App3({name,version,year}){
    return(
        <div >
            <h1 className="opacity-50">This is function3</h1>
            <h2 className="shadow p-3 mb-5 bg-warning rounded">Name: {name} Version: {version} and year: {year}</h2>
        </div>
    )
}
export default App3;