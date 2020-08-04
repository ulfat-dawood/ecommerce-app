
import React from 'react';
import {Route, BrowserRouter as Router, Switch,Link } from 'react-router-dom'; 

import Home from './core/Home'

export default function Routes(){ 

	return(
	<Router>
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    </Router>
	) 
}
