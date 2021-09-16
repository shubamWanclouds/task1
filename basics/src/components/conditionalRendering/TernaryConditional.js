import React, { Component } from 'react'

class TernaryConditional extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: false  
    }
  }
  
  render() {
    return this.state.isLoggedIn ? (
      <div>Welcome Shubam</div>
    ) : (
      <div>Welcome Guest</div>
    )
  }
}

export default TernaryConditional
