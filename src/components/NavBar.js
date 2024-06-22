import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import {
 
  
  Link
} from "react-router-dom";

export class NavBar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand"to="/">NewsApp</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page"to="/">Home</Link>
        </li>
        
        <li className="nav-item"><Link className="nav-link"to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/general">General</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/health">Health</Link></li>
        <li className="nav-item"><Link className="nav-link"to="science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link"to="/technology">Technology</Link></li>
      
        
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar
