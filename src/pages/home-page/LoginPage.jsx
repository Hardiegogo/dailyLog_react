import React from 'react'
import './Homepage.css'
import Login from '../../components/auth-components/Login'
function LoginPage() {
  return (
    <div className='homepage'>
        <div className="hero-section">
            <div className="hero-left">
                <div>
                <i class='bx bx-note'></i> | 
                    <h1 class="hero-heading">DAILYLOG</h1>
                </div>
            </div>
            <div className="hero-right">
                <div className="auth-container">
                    <Login/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage