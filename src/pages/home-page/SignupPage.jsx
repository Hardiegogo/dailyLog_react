import React from 'react'
import './Homepage.css'
import Signup from '../../components/auth-components/Signup'
function SignupPage() {
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
                    <Signup/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignupPage