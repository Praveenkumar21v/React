import React from 'react';

class Jack extends React.Component{
    constructor(){
        super();
        console.log(this)
    }
    render(){
        return(
            <div>
                <h1>This is Class 1</h1>
               {/* inline Css */}
                <h2 style={{color:'White', background:'Black'}}>{this.props.name}</h2>
               
                
            </div>
        )
    }
    
}
export default Jack;