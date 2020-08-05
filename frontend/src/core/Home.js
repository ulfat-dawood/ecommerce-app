
import React from 'react';
import '../styles.css';

export default function App(){ 
    console.log('env test:', process.env.REACT_APP_BACKEND_URL)

	return(
	<h1 className='text-white'>HOME</h1>
	) 
}
