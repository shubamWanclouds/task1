import React,{useState} from 'react'
import { useHistory } from 'react-router'

function SignupView({signup}) {

  let history = useHistory()
  const [uname, setUname] = useState('')
  const [email, setEmail] = useState('')
  const [passwd, setPasswd] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const userData={
      uname,
      email,
      passwd
    }
    signup(userData)
    history.push('/')
    localStorage.setItem('userData', JSON.stringify(userData))
    
  }

  return (
    <div className="container-sm mt-5">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">REGISTER HERE</h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" value={uname} onChange={e => setUname(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={passwd} onChange={e => setPasswd(e.target.value)}/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">I accept the terms & conditions</label>
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
    </div>
  )
}

export default SignupView
