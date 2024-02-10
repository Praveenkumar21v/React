import React,{useEffect,useState} from 'react'

const LC = () => {
    const [counter,setCounter]=useState(0);
    const [counter1,setCounter1]=useState(0);

    useEffect(()=>{
        console.log("useeffect method");

        return ()=>{
            console.log('unmounting');
        }
    },[counter,counter1]);
  return (
      <div className='d-flex'>
        <div>
        <h1>Counter</h1>
    <button onClick={()=>setCounter(counter+1)} type='submit' className='btn btn-success'>Increment</button>
    <h1>{counter}</h1>
    <button onClick={()=>setCounter(counter-1)} type='submit' className='btn btn-danger'>Decrement</button>
    </div>
     
     <div>
<h1>Counter1</h1>
     <button onClick={()=>setCounter1(counter1+1)} type='submit' className='btn btn-success'>Increment</button>
     <h1>{counter1}</h1>
     <button onClick={()=>setCounter1(counter1-1)} type='submit' className='btn btn-danger'>Decrement</button>
     </div>
     </div>

  )
}

export default LC