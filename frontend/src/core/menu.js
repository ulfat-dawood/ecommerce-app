import React, {Fragment} from 'react'; 
import {Link, withRouter} from 'react-router-dom'; 

import {signout, isAuthenticated} from '../auth/helper' //no need for '../auth/helper/index' becase index is the default
 
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

const Menu= (props)=>{
    const {history} = props; 
    return(
        <>
          <ul className="nav nav-tabs bg-dark">
              <li className="nav-item">
                  <Link style={currentTab(history, '/')} className='nav-link' to='/'>HOME</Link>
              </li>
              <li className="nav-item">
                  <Link style={currentTab(history, '/cart')} className='nav-link' to='/cart'>CART</Link>
              </li>
              {isAuthenticated() && isAuthenticated().user.role=== 0 && (<li className="nav-item">
                  <Link style={currentTab(history, '/user/dashboard')} className='nav-link' to='/user/dashboard'>U. DASHBOARD</Link>
              </li>)}
              {isAuthenticated() && isAuthenticated().user.role=== 1
              
              
              
              &&(
                  <li className="nav-item">
                  <Link style={currentTab(history, '/admin/dashboard')} className='nav-link' to='/admin/dashboard'>A. DASHBOARD</Link>
              </li>
              )}
              {!isAuthenticated() && (<>
                  <li className="nav-item">
                  <Link style={currentTab(history, '/signin')} className='nav-link' to='/signin'>SIGN IN</Link>
              </li>
              <li className="nav-item">
                  <Link style={currentTab(history, '/signup')} className='nav-link' to='/signup'>SIGN UP</Link>
              </li>
              </>)}
              {isAuthenticated() && (
                  <li className="nav-item">
                  <span className='nav-link text-warning' onClick={()=>{
                      signout(()=>{
                          history.push('/')
                      })
                  }}>SIGN OUT</span>
              </li>
              )}
              
              

          </ul>

          
        </>
    )
}

export default withRouter(Menu); 