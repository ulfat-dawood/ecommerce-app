
import React from 'react';
import {Route, BrowserRouter as Router, Switch,Link } from 'react-router-dom'; 

import Home from './core/Home'
import Signup from './user/Signup';
import Signin from './user/Signin';
import AdminRoutes from './auth/helper/AdminRoutes';
import PrivateRoutes from './auth/helper/PrivateRoutes';
import UserDashboard from './user/UserDashBoard';


export default function Routes(){ 
	return(
	<Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/signin' component={Signin}/>
            <PrivateRoutes exact path='/user/dashboard' component={UserDashboard}/>
            <PrivateRoutes exact path='/user/dashboard' component={AdminRoutes}/>



        </Switch>
    </Router>
	) 
}
