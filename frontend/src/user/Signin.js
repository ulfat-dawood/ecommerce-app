import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

//isAuthenticated: returns JWT token from the localStorage
import {signin, authenticate, isAuthenticated} from '../auth/helper';
import Base from '../core/Base'; 
import {} from '../auth/helper'; //no need for '../auth/helper/index' becase index is the default

const Signin=()=>{

    const [values, setValues]= useState({
        email:'maha@maha.com',
        password:'12345',
        error:'',
        loading:false,
        didRedirect:false
    })

    const {email, password, error, loading, didRedirect}= values;
    const {user}= isAuthenticated(); //returns the jwt value if it exists or false

    const handleChange= name=> event=>{
        setValues({...values, error:false, [name]:event.target.value})
    }

    const onSubmit=(event)=>{
        //signin the user> if valid user: 1-authenticate the user 2-redirect
        //                 if not: consol.log 
        event.preventDefault();
        setValues({...values, error:false, loading:true});
        signin({email, password}) // signin() returns> fetch() which returns a promise.
        .then(data=>{
            if(data.error){
                setValues({...values, error:data.error, loading:true});
            }else{
                //authenticate accepts data and next as param
                //data=> token     next=>callback function
                authenticate(data, ()=>{
                    setValues({...values, didRedirect: true})
                })
            }
        })
        .catch(console.log('signin failed'));
    }

    const performRedirect= ()=>{
        if(didRedirect){
            //if user is authenticated & isAdmin: 
            if(user && user.role===1){
                return(
                    <Redirect to='admin/dashboard'/>
                )
            }else{
                return(
                    <Redirect to='user/dashboard'/>

                )
            }
        }
        if(isAuthenticated()){ 
            return <Redirect to='/' /> ;
        }
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
 
     const loadingsMsg= ()=>{
        return ( 
            //if loading is true then return the following
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
                  
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
                        <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    return(
        <Base title='Signin Page' description='A page for user to signin'>
            {loadingsMsg()}
            {errorMsg()}
            {signinForm()}
            {performRedirect()}
            <p className="text-white text-center">
                {JSON.stringify(values)}
            </p>
        </Base>
    )
}

export default Signin; 