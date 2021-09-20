import React from 'react'
import {Link} from "react-router-dom";
import { useHistory } from 'react-router'
import image from "../assets/user.jpg"

function Navbar() {
  let history = useHistory()
  let userData = JSON.parse(localStorage.getItem("userData"))
  
  const handleSignout = () => {
    userData["isLoggedIn"] = false
    localStorage.setItem('userData', JSON.stringify(userData))
    history.push('/login')

  }

  return (
    <header className="header">
      <h2 id="company-name">Wan<b>Clouds</b></h2>
      {/* <i id="navbtn" className="fa fa-bars" aria-hidden="true" ></i> */}
      <div className="user-profile">
        <h6>{userData.uname}</h6>
        <img src={image} />
        <div className="dropdown mx-3">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" onClick={handleSignout}>Logout</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
  // return (
  //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  //     <div className="container-fluid">
  //       <Link className="navbar-brand" to="/">Welcome Guest</Link>
  //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //         <ul className="navbar-nav">
  //           <li className="nav-item">
  //             <a className="nav-link active" aria-current="page" onClick={handleSignout}>Signout</a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // )
}

export default Navbar


