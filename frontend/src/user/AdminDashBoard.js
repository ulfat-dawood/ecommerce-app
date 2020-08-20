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

    }

    const AdminRightSide=()=>{
        
    }
    return(
        <Base title='Welcome to admin area' description='manage all of you products here'>
        {AdminLeftSide()}
        {AdminRightSide()}
        </Base>

    )
}

export default AdminDashboard; 