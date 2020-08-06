import React from 'react'; 
import {Link, withRouter} from 'react-router-dom'; 

//style menuItems based on the last visited route
const currentTab= (history, path)=>{
    //if last visited route(extracted from history) matches the menu item route
    //then GREEN other wise WHITE
    if(history.location.pathname===path){
        return {color: '#2ecc72'}
    }else{
        return {color: '#FFFFFF'}
    }
}

const Menu= (propes)=>{
    const {history} = propes; 
    return(
        <>
          <ul className="nav nav-tabs bg-dark">
              <li className="nav-item">
                  <Link style={currentTab(history, '/')} className='nav-link' to='/'>HOME</Link>
              </li>
              <li className="nav-item">
                  <Link style={currentTab(history, '/cart')} className='nav-link' to='/cart'>CART</Link>
              </li>
              <li className="nav-item">
                  <Link style={currentTab(history, '/user/dashboard')} className='nav-link' to='/user/dashboard'>DASHBOARD</Link>
              </li>
              <li className="nav-item">
                  <Link style={currentTab(history, '/admin/dashboard')} className='nav-link' to='//admin/dashboard'>A. DASHBOARD</Link>
              </li>
              <li className="nav-item">
                  <Link style={currentTab(history, '/signin')} className='nav-link' to='/signin'>SIGN IN</Link>
              </li>
              <li className="nav-item">
                  <Link style={currentTab(history, '/signup')} className='nav-link' to='/signup'>SIGN UP</Link>
              </li>
              <li className="nav-item">
                  <Link style={currentTab(history, '/signout')} className='nav-link' to='/signout'>SIGN OUT</Link>
              </li>
              

          </ul>
        </>
    )
}

export default withRouter(Menu); 