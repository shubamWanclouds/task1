import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function Login() {
  let history = useHistory()
  
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPasswd, setLoginPasswd] = useState('')
  const [loginError, setLoginError] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    let userData = JSON.parse(localStorage.getItem("userData"))
    console.log(userData)
    if((loginEmail === userData.email) && (loginPasswd === userData.passwd))
      {
        userData["isLoggedIn"] = true
        localStorage.setItem('userData', JSON.stringify(userData))
        history.push('/')
      }
    else
      setLoginError("Wrong Email Id / Password")  
  }

  return (
    <div className="container-sm mt-5">
      <form onSubmit={handleLogin}>
        <h1 className="text-center">LOGIN</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={loginEmail} onChange={e=>setLoginEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={loginPasswd} onChange={e=>setLoginPasswd(e.target.value)}/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
        </div>
        <div style={{color:'red',fontSize:15,margin:5}}>{loginError}</div>
        <button type="submit" className="btn btn-primary">Login</button> &nbsp;&nbsp; <br />
        <Link id="emailHelp" className="form-text mt-5" to="/Signup">New user?</Link>
      </form>
  </div>
  )
}

export default Login
