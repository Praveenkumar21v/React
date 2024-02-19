import React,{useState} from 'react'

const TextInput = ({handleParentCallback}) => {
    const [name,setName]=useState('');

    const handleChange = (event) =>{
        setName(event.target.value);
        handleParentCallback(event.target.value);  
    }
  return (
    <>      
    <form>
    <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Please enter the value..."
      />

      </form>
      </>

  
  );
}

export default TextInput;