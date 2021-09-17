import React from 'react'
import Navbar from './Navbar'

function Home({user}) {
  console.log(user)
  if(user.uname !== '')
    {
      return (
        <div> 
          <Navbar/>
          <p>Welcome {user.uname}</p>
        </div>
      )
    }
    else {
      return (
        <div>
        <Navbar/>
        <p>Welcome Guest</p>
        </div>
      )
    }
}

export default Home
