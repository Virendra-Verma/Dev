import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="mx-4 px-2 fw-bold fs-5 text-white rounded-1" style={{backgroundColor:'black',border:'2px'}} href="#">
      DEV
    </div>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex" role="search">
        <input
          className="form-control "
          type="search"
          placeholder="Search"
          aria-label="Search"
          style={{width:'400px'}}
        />
        <button className="btn btn-outline-none" style={{marginLeft:'-40px'}}>
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/home">
            
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Log in
          </NavLink>
        </li>
        
        <button className="btn btn-outline-primary" type="submit">
          Create account
        </button>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar