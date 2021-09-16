import React, { Component } from 'react'

class IfElse extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: true  
    }
  }
  
  render() {
    if(this.state.isLoggedIn) {
      return <div>Welcome Shubam</div>;
    } else {
      return <div>Welcome Guest</div>;
    }
  }
}

export default IfElse
