import React from 'react'; 
import {Link, withRouter} from 'react-router-dom'; 

const Menu= ()=>{
    return(
        <>
          <ul className="nav nav-tabs bg-dark">
              <li className="nav-item">
                  <Link className='nav-link' to='/'>HOME</Link>
              </li>
              <li className="nav-item">
                  <Link className='nav-link' to='/'>CART</Link>
              </li>
              <li className="nav-item">
                  <Link className='nav-link' to='/'>DASHBOARD</Link>
              </li>
              <li className="nav-item">
                  <Link className='nav-link' to='/'>A. DASHBOARD</Link>
              </li>
              <li className="nav-item">
                  <Link className='nav-link' to='/'>SIGN IN</Link>
              </li>
              <li className="nav-item">
                  <Link className='nav-link' to='/'>SIGN UP</Link>
              </li>
              <li className="nav-item">
                  <Link className='nav-link' to='/'>SIGN OUT</Link>
              </li>

          </ul>
        </>
    )
}

export default withRouter(Menu); 