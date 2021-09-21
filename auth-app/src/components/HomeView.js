import React from 'react'
import Dashboard from './Dashboard'
import About from './About'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home({user}) {
  
  return (
    <div>
      <Navbar/>
      <div class="containerBox">
        <Sidebar/>
        <Switch>
          {/* <Route path="/login" exact component={Login}  />
          <Route path="/signup" exact component={Signup} /> */}
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/about" exact component={About} />

        </Switch>
      </div>
    </div>
  )
}

export default Home
