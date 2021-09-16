import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div className="container-sm mt-5">
        <form >
          <h1 className="text-center">LOGIN</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password"/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>
    )
  }
}

export default Login
