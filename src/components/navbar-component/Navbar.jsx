
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import './Navbar.css'

const logoutHandler=(dispatchAuth,navigate)=>{
    dispatchAuth({type:"USER_LOGOUT"})
    navigate('/login')
}


const Navbar=()=> {

    const {authState,dispatchAuth}=useAuth()
    const navigate=useNavigate()



  return (
    <header className='navbar'>
            <div className="header-left">
                
                <Link to='/'>
                    <h3><i class='bx bx-note'></i> | DAILYLOG</h3>
                </Link>
            </div>


            <div className="header-right">
                <nav>
                    <ul>
                        <li>
                            {authState.isUserActive?<button onClick={()=>logoutHandler(dispatchAuth,navigate)} ><i class='bx bx-log-out-circle icons'></i></button>:<Link to='/login'><i className='bx bx-log-in-circle icons'></i></Link>}
                        </li>
                        <li>
                            <div className="badge-wrapper">
                                {/* <button onClick={()=>wishlistClickHandler(authState,navigate)}><i className='bx bx-heart icons'></i></button>
                                <div className="badge btn-badge">{cartState.activeUserWishList.length}</div> */}
                            </div>
                        </li>
                        <li>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
  )
}

export default Navbar;
