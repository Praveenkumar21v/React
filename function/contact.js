import React,{useState} from 'react'
import PropTypes from 'prop-types';

const Contact= ({name})=>{
    const [bgColor,setBgColor]=useState('red');
    const[btnColor,setBtnColor]=useState('blue');
    const handleColorChange =()=>{
        setBgColor(`#${Math.random().toString().slice(-6)}`);
        setBtnColor(`#${Math.random().toString().slice(-6)}`);
    }
    return (
        <div style={{backgroundColor:bgColor}}>
            <h1>Contact</h1>
            <h2>{name}</h2>
            <button style={{backgroundColor:btnColor}} type='submit' onClick={handleColorChange}>Change Color</button>

        </div>
    )
}

Contact.defaultProps={
    name:'10000 coders',
}

Contact.prototypes={
    name:PropTypes.string.isRequired,
}
export default Contact