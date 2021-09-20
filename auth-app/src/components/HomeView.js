import React from 'react'
import Dashboard from './Dashboard'
import About from './About'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Home({user}) {
  return (
    <div>
      <Navbar/>
      <div class="containerBox">
        <Sidebar/>
        
      </div>
    </div>
  )
}

export default Home
