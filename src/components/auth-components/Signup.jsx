import React,{useState} from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'
import { createNewUser } from '../../utils/createNewUser'


const Signup=() =>{
    const {authState,dispatchAuth}=useAuth()
    const navigate=useNavigate()
    const [user,setUser]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
    })

    const {firstName,lastName,email,password}=user;
    const changeHandler=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const clickHandler=(e)=>{
        e.preventDefault()
        createNewUser(user,authState,dispatchAuth,navigate)
    }

  return (
    <form className="auth-wrapper card-shadow p-24">
        <h2 className='h2'>Signup</h2>
        <label htmlFor="username">
                        <h4 className="mt-16">First name:</h4>
                        <input className="input input-primary" type="text" name="firstName" value={firstName} onChange={changeHandler}/>
                    </label>
                    <label htmlFor="username">
                        <h4 className="mt-16">Last name:</h4>
                        <input className="input input-primary" type="text" name="lastName" value={lastName} onChange={changeHandler} />
                    </label>
                    <label htmlFor="username">
                        <h4 className="mt-16">Email:</h4>
                        <input className="input input-primary" type="email" name="email" value={email} onChange={changeHandler}/>
                    </label>
                    <h4 className="mt-16">Password:</h4><label>
                    <input className="input input-primary" id="user-password" name="password" type="password" value={password} onChange={changeHandler}/>
                    </label>
                    <div className="auth_options mt-16">
                        <label htmlFor="remember-me x-small-text">
                            <input type="checkbox" id="remember-me"/>
                            I accept all terms and conditions.
                        </label>


                    </div>
                    <button className="btn btn-primary mt-16" onClick={clickHandler}>Create a new account</button>
                    <Link to='/login' className="link-secondary center-text mt-1">Already have an account</Link>
                
    </form>
  )
}

export default Signup