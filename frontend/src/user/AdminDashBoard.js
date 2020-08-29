import React from 'react'
import {Link} from 'react-router-dom';

import Base from '../core/Base'; 
import {isAuthenticated} from '../auth/helper'; 

const AdminDashboard= ()=>{
    
    const {user: {name, email, role}} = isAuthenticated(); 

    const AdminLeftSide=()=>{
        return (
            <div className="card">
                <h4 className="card-header bg-dark text-white"> Admin nav bar</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to='/admin/create/category' className='nav-link text-success'>Create Categories</Link>
                    </li>
                    
                    <li className="list-group-item">
                        <Link to='/admin/category' className='nav-link text-success'>Manage Categories</Link>
                    </li>
                    
                    <li className="list-group-item">
                        <Link to='/admin/create/product' className='nav-link text-success'>Create Product</Link>
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
        return(
            <div className="card mb-4">
                <h4 className="card-header">Admin info</h4>
                <ul className="list-goup m-0 p-0">
                    <li className="list-group-item">
                        <p><span className="badge badge-success mr-2">Name:</span> {name}</p>
                    </li>

                    <li className="list-group-item">
                        <p><span className="badge badge-success mr-2">Email:</span> {email}</p>
                    </li>

                    <li className="list-group-item">
                        <span className="badge badge-danger">Admin Area</span> 
                    </li>
                </ul>
            </div>
        )
    }
    return(
        <Base title='Welcome to admin area' description='manage all of you products here' className='container bg-success p-4'>
            <div className="row">
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