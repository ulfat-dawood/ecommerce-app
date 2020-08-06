import React from 'react'; 
import {Link, withRouter} from 'react-router-dom'; 

const Menu= ()=>{
    return(
        <>
          <ul className="nav nav-tabs bg-dark">
              <li className="nav-item">
                  <Link className='nav-link'></Link>
              </li>
          </ul>
        </>
    )
}

export default Menu; 