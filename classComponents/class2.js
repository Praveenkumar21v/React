import React from 'react';


class Virat extends React.Component{

    constructor(){
        super()

        console.log(this)
    }
    render(){
        // internal css
        const h2Style={color:'White' ,background:'red'}

        return(
            <div>
                <h1>This is Class 2</h1>
                <h2 style={h2Style}>Name:{this.props.name}  age:{this.props.age}</h2>
                
            </div>
        )
    }
}
export default Virat;