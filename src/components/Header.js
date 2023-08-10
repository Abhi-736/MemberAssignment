import React, { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {
const [current, setCurrent] = useState('')
  const handleChange=()=>{console.log(current)};
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             <Link to="/">
                Home
                </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" >
                Team Memebers
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to='blog'>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="notes">
                    Notes
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to='/'>
                    Home
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          
            <input onChange={(e)=>setCurrent(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" onClick={()=>handleChange()} type="submit">
              Search
            </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Header;
