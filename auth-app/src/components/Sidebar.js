import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function Sidebar() {
  return (
    <div>
      <nav class="sideBar">
        <ul>
          <li>
            <Link to="/dashboard">
              <i class="fa fa-desktop" aria-hidden="true"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-info-circle" aria-hidden="true"></i>
              <span>About</span>
            </a>
          </li>
        </ul>
      </nav>
      <section class="content">
        <h1>WELCOME</h1>
      </section>
    </div>
  )
}
