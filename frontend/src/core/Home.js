
import React from 'react';
import '../styles.css';
import {backendUrl} from '../backend' 
import Base from './Base'; 

export default function App(){ 
    
	return(
     <Base title='home page' description='welcome to the tshirt store'>
         <div className="row">
             <div className="col-4">
                 <button className="btn btn-success">Test</button>
             </div>
             <div className="col-4">
                 <button className="btn btn-success">Test</button>
             </div>
             <div className="col-4">
                 <button className="btn btn-success">Test</button>
             </div>
            

         </div>
     </Base>
	) 
}
