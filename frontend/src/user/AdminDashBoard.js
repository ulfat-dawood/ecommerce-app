import React from 'react'
import {Link} from 'react-router-dom';

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
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to='/admin/create/category' className='nav-link text-success'>Create Categories</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/admin/create/category' className='nav-link text-success'>Create Product</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/admin/create/product' className='nav-link text-success'>Create Categories</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/admin/products' className='nav-link text-success'>Manage Products</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to='/admin/orders' className='nav-link text-success'>Manage Orders</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const AdminRightSide=()=>{
        
    }
    return(
        <Base title='Welcome to admin area' description='manage all of you products here' className='container bg-success p-4'>
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