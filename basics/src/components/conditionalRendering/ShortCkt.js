import React, { Component } from 'react'

class ShortCkt extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoggedIn: true  
    }
  }
  
  render() 
  {
    return this.state.isLoggedIn && <div>Welcome Shubam</div>
  }
}

export default ShortCkt
