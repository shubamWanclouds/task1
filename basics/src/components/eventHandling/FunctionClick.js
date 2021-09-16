import React from 'react'

export default function FunctionClick() {
  const clickHandler = () => {
    console.log("Button is Clicked");
  }
  return (
    <div>
      <button onClick={clickHandler}>Button in Functional Component</button>
    </div>
  )
}
