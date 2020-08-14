import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Base from '../core/Base'; 

const Signup=()=>{

    const [values, setValues]= useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success: flase
    }); 
    //destructuring the state:
     const {name, email, password, error, success}= values; 

    const handleChange= name=> event=>{
        setValues({...values, error:false, [name]:event.target.value})
    }

    const signupForm= ()=>{
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form >
                        <div className="form-group">
                            <label  className="text-light">Name:</label>
                            <input className="form-control" type="text" onChange={handleChange('name')}/>

                            <label  className="text-light">Email:</label>
                            <input className="form-control" type="email" onChange={handleChange('email')}/>

                            <label  className="text-light">Password</label>
                            <input className="form-control" type="password" onChange={handleChange('password')}/>
                        </div>
                        <button className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    return(
        <Base title='Signup Page' description='A page for user to signup'>
        {signupForm()}
        </Base>
    )
}

export default Signup; 