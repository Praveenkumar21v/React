import React from 'react'
const employeeData=[
    {
        id:3456,
        name:'Chandu',
        designation:'S/W Engineer',
        location:'Hyderabad',
        PhoneNum:1234567890,
    },
    {
        id:789,
        name:'Virat',
        designation:'Tech Arch',
        location:'Banglore',
        PhoneNum:9201010101,
    },
    {
        id:1112,
        name:'Dev',
        designation:'Sr.S/W Engineer',
        location:'Mumbai',
        PhoneNum:8888889900,
    },
]

const Employee=()=>{
return (
    <div>
        <h1>Employee Information</h1>
        <table className='table'>
            <thead>
                <tr className='table-dark'>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DESIGNATION</th>
                    <th>LOCATION (DC)</th>
                    <th>PHONE NUMBER</th>
                    <th colSpan={2}>Actions</th>
                </tr>
            </thead>
            <tbody>
               
                {
                    employeeData.length === 0 ? (
                        <tr className='table-danger'><td colSpan={5} style={{textAlign:"center"}} >No Records Found</td></tr>
                    ) : (
                    //     <tr className='table-info'>
                    //     <td>123</td>
                    //     <td>Jack</td>
                    //     <td>Developer</td>
                    //     <td>Mumbai</td>
                    //     <td>9999999999</td>
                    // </tr>

                    employeeData.map(({id,name,designation,location,PhoneNum})=>(
                        <tr key={id} className='table-info'>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{designation}</td>
                            <td>{location}</td>
                            <td>{PhoneNum}</td>
                            <td><button className='btn btn-warning'>Edit</button></td>
                            <td><button className='btn btn-danger'>Delete</button></td>
                         </tr>
                    ))
                    )
                }
            </tbody>
        </table>
    </div>
)
}
export default Employee;