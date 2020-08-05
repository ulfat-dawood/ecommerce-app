
import React from 'react';
import '../styles.css';
import {backendUrl} from '../backend' 

export default function App(){ 
    
	return(
    <h1 className='text-white'>HOME is: {backendUrl}</h1>
	) 
}
