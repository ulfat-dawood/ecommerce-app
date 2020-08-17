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

    const {email, password, error, loading, didRedirect}= values;
    const {user}= isAuthenticated(); 

    const handleChange= name=> event=>{
        setValues({...values, error:false, [name]:event.target.value})
    }

    const onsubmit=(event)=>{
        event.preventDefault();

    }

    const errorMsg= ()=>{
      
        return ( 
         <div className="row">
         <div className="col-md-6 offset-sm-3 text-left">
        <div className="alert alert-danger"
         style={{display: error ? '' : 'none'}}
         >{error}</div>
         </div>
          </div>
         )
     }
 
     const successMsg= ()=>{
         return ( 
         <div className="row">
         <div className="col-md-6 offset-sm-3 text-left">
         <div className="alert alert-success"
          style={{display: success ? '' : 'none'}}
          >account created! Please login <Link to='/signin'>here</Link></div>
         </div>
          </div>
                
          )
      }

    const signinForm= ()=>{
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form >
                        <div className="form-group">
                            <label  className="text-light">Email:</label>
                            <input className="form-control" value={email} onChange={handleChange('email')} type="email"/>

                            <label  className="text-light">Password:</label>
                            <input className="form-control" value={password} onChange={handleChange('password')} type="password"/>
                        </div>
                        <button onClick={onSubmit}className="btn btn-success btn-block">Submit</button>
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