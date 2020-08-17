import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

//isAuthenticated: returns JWT token from the localStorage
import {signin, authenticate, isAuthenticated} from '../auth/helper';
import Base from '../core/Base'; 

const Signin=()=>{

    const [values, setValues]= useState({
        email:'',
        password:'',
        error:'',
        loading:false,
        didRedirect:false
    })

    const {email, password, error, loading, didRedirect}= values

    const signinForm= ()=>{
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form >
                        <div className="form-group">
                            <label  className="text-light">Email:</label>
                            <input className="form-control" type="email"/>

                            <label  className="text-light">Password:</label>
                            <input className="form-control" type="password"/>
                        </div>
                        <button className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    return(
        <Base title='Signin Page' description='A page for user to signin'>
            {signinForm()}
        </Base>
    )
}

export default Signin; 