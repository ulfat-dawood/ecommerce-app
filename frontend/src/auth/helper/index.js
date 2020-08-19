import {API} from '../../backend'; //the backend url


export const signup= (user)=> {
    
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
    .then(response=>{ //if success
        return response.json() // convert the response into json
    })
    .catch(err=>{ //if there are errors
        console.log(err); 
    })
}

export const signin= (user)=> {
    console.log(user); 

    //TODO: autenticate the user 
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      })
    .then(response=>{ //if success
        return response.json() // convert the response into json
    })
    .catch(err=>{ //if there are errors
        console.log(err); 
    })
}

//authenticate() is a middleware> use next
export const authenticate= (data, next)=>{
    if(typeof window != 'undefined'){ //if user has access to the window object
        localStorage.setItem('jwt', JSON.stringify(data));
        next(); 
    }
}

//signout is a middleware so we user next
//signout means just remove the the JWT token
export const signout= (next)=> { //next means accepst FCB 
    if(typeof window != 'undefined'){ //if user has access to the window object
        localStorage.removeItem('jwt');
        next(); 
        
        //Logout the user from the backend as well:
        return fetch(`${API}/signout`, {
            method: 'GET'
        })
        .then(response=> console.log('signed out successfully'))
        .catch(err=> console.log(err))
    }
}

export const isAuthenticated= ()=>{
    if(typeof window == 'undefined'){ //if user has access to the window object
        return false;  
    }
    if(localStorage.getItem('jwt')){ //if we are able to access localStorage 
        return JSON.parse(localStorage.getItem('jwt'))
    }else{
        return false; 
    }
}