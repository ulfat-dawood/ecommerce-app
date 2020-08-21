import React,{useState} from 'react'
import {Link} from 'react-router-dom'; 

import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';

const AddCategory= ()=>{
    const [name, setName]= useState(''); 
    const [error, setError]= useState(false); 
    const [success, setSuccess]= useState(false); 

    const {user, token}= isAuthenticated(); 

    const MyCategoryForm=()=>{
        return(
            <form>
                <div className="form-group">
                    <p className="lead">Enter the category</p>
                    <input type="text" className='form-control my-3' autoFocus required placeholder='for Ex. summer'/>
                    <button className="btn btn-outline-info">Create Category</button>
                </div>
            </form>
        )
    }
    const goBack= ()=>(
        <div className="mt-5">
            <Link className='btn btn-sm btn-info mb-3' to='/admin/dashboard'>Admin Home</Link>
        </div>
    )
    return(
        <Base title='create a category here' description='add a new category for new tshirts'
        className='container bg-info p-4'>
            <div className="bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {MyCategoryForm()}
                </div>
            </div>
        </Base>

    )
}

export default AddCategory; 