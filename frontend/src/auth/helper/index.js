import {API} from '../../backend'; //the backend url


export const signup= (user)=> {
    return fetch(`${API}/signup` , {
        method: 'POST', 
        header:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
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
    return fetch(`${API}/signin` , {
        method: 'POST', 
        header:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
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
    if(typeof window != 'undefined'){ //if window object is accessible to us
        localStorage.setItem('jwt', JSON.stringify(data));
        next(); 
    }
}

