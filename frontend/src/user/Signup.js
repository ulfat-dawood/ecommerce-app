import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Base from '../core/Base'; 
import { signup } from '../auth/helper';

const Signup=()=>{

    const [values, setValues]= useState({
        name:'',
        email:'',
        password:'',
        error:'',
        success: false
    }); 

    //destructuring the state:
     const {name, email, password, error, success}= values; 

    const handleChange= name=> event=>{
        setValues({...values, error:false, [name]:event.target.value})
    }

    const onSubmit= event=>{
        event.preventDefault(); 
        setValues({...values, error:false});
        signup({name, email, password})
        .then(data=>{
            console.log('data',data)
            if(data.error){
                setValues({...values, error:data.error, success: false})
            }else{//if no error, the backend will be hit> reset the state values
                setValues({...values, name:'', email:'', password:'',error:'',success:true})

            }
        })
        .catch(console.log('error in signup')) 
    }

    const signupForm= ()=>{
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form >
                        <div className="form-group">
                            <label  className="text-light">Name:</label>
                            <input className="form-control" value={name} type="text" onChange={handleChange('name')}/>

                            <label  className="text-light">Email:</label>
                            <input className="form-control" value={email} type="email" onChange={handleChange('email')}/>

                            <label  className="text-light">Password</label>
                            <input className="form-control" value={password} type="password" onChange={handleChange('password')}/>
                        </div> 
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
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