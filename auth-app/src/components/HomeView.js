import React from 'react'
import Dashboard from './Dashboard'
import About from './About'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Switch, Route, Redirect } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar/>
      <div class="containerBox">
        <Sidebar/>
        <Switch>
          <Route path="/about" exact component={About}  />
          <Route path="/dashboard" exact component={Dashboard} />
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </div>
    </div>
  )
}

export default Home
