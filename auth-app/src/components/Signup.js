import React, { Component } from 'react'


class Signup extends Component {
  
  constructor(props) {
    super(props)

    console.log(this.props.user.uname)
    console.log(this.props.user.email)
    console.log(this.props.user.passwd)
    
    this.state = {
       uname:'',
       email:'',
       passwd:''
    }
  }

  handleSubmit = (event) => {
    // event.preventDefault()
    this.props.signup(this.state)
  }

  
  
  render() {
    const {uname,email,passwd} = this.state
    return (
      <div className="container-sm mt-5">
        <form onSubmit={this.handleSubmit}>
          <h1 className="text-center">REGISTER HERE</h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" value={uname} onChange={e => this.setState({uname:e.target.value})}/>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" value={email} onChange={e => this.setState({email:e.target.value})}/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" value={passwd} onChange={e => this.setState({passwd:e.target.value})}/>
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
}

export default Signup
