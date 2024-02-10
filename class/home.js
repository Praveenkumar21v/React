import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component{
    constructor(){
        super();
        console.log(this);
        this.state = {
            bgcolor:'red',
           btncolor:'blue',
        };
    }

    handleColorChange=()=>{
       this.setState({
        bgcolor:`#${Math.random().toString().slice(-6)}`,
       btncolor: `#${Math.random().toString().slice(-6)}`
       })
    }

    componentWillUnmount(){
        alert('Component unmount called ...')
    }

    render(){
        return (
            <div style={{backgroundColor:this.state.bgcolor}}>
                <h1>HOME</h1>
                <h2>{this.props.name}</h2>
                <button style={{backgroundColor:this.state.btncolor}} type='submit' onClick={this.handleColorChange}>Change Color</button>
            </div>
        )
    }
}
Home.defaultProps = {
    name:'10000 coders'
}
Home.prototypes = {
    name:PropTypes.string.isRequired,
}

export default Home;