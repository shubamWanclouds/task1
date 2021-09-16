import React, { Component } from 'react'

class ElementVariables extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: false  
    }
  }
  
  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Shubam</div>
    } else {
      message = <div>Welcome Guest</div>
    }
    return <div>{message}</div>
  }
}

export default ElementVariables
