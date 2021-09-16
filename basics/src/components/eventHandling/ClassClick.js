import React, { Component } from 'react'

class ClassClick extends Component {
  clickHandler() {
    console.log("Button is Clicked");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Button in Class Component</button>    
      </div>
    )
  }
}

export default ClassClick
