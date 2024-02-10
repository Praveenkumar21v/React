import React from 'react';
import Home from './home';

class LifeCycle extends React.Component{
    constructor(props){
        super(props);   
        this.state={
            name:'Jack'
        } 
        console.log('Constructor Method')
    }

    handleChangeUser=()=>{
        this.setState({name:'Abir'})
    }
//    static getDerivedStateFromProps(props,state){
// return {name:props.name};
//     }

// componentDidMount(){
//     setTimeout(()=>{
//         this.setState({
//             name:"Virat"
//         })
//     },2000)
// }

// shouldComponentUpdate(){
//     return false;
// }


componentDidUpdate(){
    setTimeout(()=>{
        this.setState({
            name:"Adhvan"
        })
    },2000);
}
    render(){
        return <div>
         <h1>Life Cycle of Components is designed by {this.state.name}</h1>
         <button type='submit' className='btn btn-danger' onClick={this.handleChangeUser}>Change User</button>
         <Home/>
         </div>
    }
}
export default LifeCycle;