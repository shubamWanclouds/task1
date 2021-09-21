import React,{useState} from 'react'
import { useHistory, Link } from 'react-router-dom'
import wave from '../assets/wave.png'
import user from '../assets/avatar.svg'
import './SignupView.css'

function SignupView({signup}) {
  const validEmailRegex =  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  let history = useHistory()

  const [uname, setUname] = useState('')
  const [email, setEmail] = useState('')
  const [passwd, setPasswd] = useState('')
  const [unameError, setUnameError] = useState('')
  const [passwdError, setPasswdError] = useState('')
  const [emailError, setEmailError] = useState('')

  const validateForm = (error) => {
    let valid = true;
    if(error.unameError.length > 0 || error.emailError.length > 0 || error.passwdError.length > 0 ) {
      valid = false
    }
    console.log(error, valid)
    return valid;
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(validateForm ( {unameError,emailError,passwdError} ) ) {
      const userData={
        uname,
        email,
        passwd,
        isLoggedIn:false,
      }
      signup(userData)
      localStorage.setItem('userData', JSON.stringify(userData))
      history.push('/login')
    }
    else {
    }
  }
  
  const handleChange = (event) => {
    event.preventDefault()
    const {name, value} = event.target
  
    switch(name) {
      case "uname":
        setUname(value)
        let unErr = value.length < 6 ? 'Username must be 6 characters long' : ''
        setUnameError(unErr)
        break;
      case "email":
        setEmail(value)
        let emErr = validEmailRegex.test(value) ? '' : 'Email is not valid'
        setEmailError(emErr)
        break;
      case "passwd":
        setPasswd(value)
        let passErr = value.length < 8 ? 'Password must be 8 characters long' : ''
        setPasswdError(passErr)
        break;
      default : break;
    }  
  }

  return (
    <div className="form" style={{background:`url(${wave})`}}>
        <form onSubmit={handleSubmit}>
          <div className="imgcontainer">
            <img src={user} alt="icon" className="icon"/>
            <h2>Sign Up</h2>
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label" style={{fontWeight:'bold'}}>Username</label>
            <input name="uname" type="text" className="form-control" value={uname} onChange={handleChange} 
            placeholder="Username" required/>
            <div style={{color:'red',fontSize:15}}>{unameError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={{fontWeight:'bold'}}>Email address</label>
            <input name="email" type="email" className="form-control" value={email} onChange={handleChange} 
            placeholder="Email" required/>
            <div style={{color:'red',fontSize:15}}>{emailError}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" style={{fontWeight:'bold'}}>Password</label>
            <input name="passwd" type="password" className="form-control" value={passwd} onChange={handleChange} 
            placeholder="Password" required/>
            <div style={{color:'red',fontSize:15}}>{passwdError}</div>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
            <label className="form-check-label" htmlFor="exampleCheck1">I accept the terms & conditions</label>
          </div>
          <button type="submit" className="btn btn-success">Register</button>
          <Link id="emailHelp" className="form-text mt-5" to="/Login" style={{fontSize:15, marginTop:5,color:'#000'}}>Existing user?</Link>
        </form>
    </div>

    
  )
}

export default SignupView
