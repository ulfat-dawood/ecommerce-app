import {API} from '../../backend'; //the backend url


export const signup= (user)=> {
    return fetch(`${API}/signup` , {
        method: 'POST', 
        header:{
            accept: 'application/json',
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

