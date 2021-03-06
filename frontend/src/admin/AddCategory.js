import React,{useState} from 'react'
import {Link} from 'react-router-dom'; 

import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import {createCategory} from './helper/adminapicall';

const AddCategory= ()=>{
    const [name, setName]= useState(''); 
    const [error, setError]= useState(false); 
    const [success, setSuccess]= useState(false); 

    const {user, token}= isAuthenticated(); 

    const handleChange= (e)=>{
        setError(''); //reset error as it might have value from previous transaction
        setName(e.target.value)
    }

    const onSubmit = event => {
        event.preventDefault();
        setError("");
        setSuccess(false);
    
        //backend request fired
        createCategory(user._id, token, { name }).then(data => {
          if (data.error) {
            setError(true);
          } else {
            setError("");
            setSuccess(true);
            setName("");
          }
        });
      };

    const successMsg= ()=>{
        if(success){
            return <h4 className="text-success">Category Created</h4>
        }
    }

    const warningMsg= ()=>{
        return <h4 className="text-warning">failed to create category</h4>
        
    }

    const MyCategoryForm=()=>{
        return(
            <form>
                <div className="form-group">
                    <p className="lead">Enter the category</p>
                    <input type="text" className='form-control my-3' 
                    autoFocus required placeholder='for Ex. summer'
                    onChange={handleChange}
                    value={name}/>
                    <button onClick={onSubmit} className="btn btn-outline-info">Create Category</button>
                </div>
            </form>
        )
    }
    const goBack= ()=>(
        <div className="mt-5">
            <Link className='btn btn-sm btn-dark mb-3' to='/admin/dashboard'>Admin Home</Link>
        </div>
    )
    return(
        <Base title='create a category here' description='add a new category for new tshirts'
        className='container bg-info p-4'>
            <div className="bg-white rounded">
                <div className="col-md-8 offset-md-2">
                    {successMsg()}
                    {warningMsg()}
                    {MyCategoryForm()} 
                    {goBack()}
                </div>
            </div>
        </Base>

    )
}

export default AddCategory; 