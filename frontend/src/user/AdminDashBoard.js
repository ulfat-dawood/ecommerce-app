import React from 'react'

import Base from '../core/Base'; 
import {isAuthenticated} from '../auth/helper'; 

const AdminDashboard= ()=>{
    const myObj= {
        admin: {name:'john',age:40},
        user:{name:'jack',age:20}
    }
    const {user: {name, email, role}} = myObj; 

    const AdminLeftSide=()=>{
        return (
            <div className="card">
                <h4 className="card-header bg-dark text-white"> Admin nav bar</h4>
            </div>
        )
    }

    const AdminRightSide=()=>{
        
    }
    return(
        <Base title='Welcome to admin area' description='manage all of you products here' className='container bg-info p-4'>
            <div className="raw">
                <div className="col-3">
                {AdminLeftSide()}
                </div>
                <div className="col-9">
                {AdminRightSide()}
                </div>
            </div>
        
        
        </Base>

    )
}

export default AdminDashboard; 