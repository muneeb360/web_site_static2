import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"

import Logo from "../../images/logo-white.png"

const NavbarStyleFour = () => {
  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("header")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
   <header
      id="header"
      className="headroom navbar-color-white navbar-style-four"
    >
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link
              to="/"
              onClick={toggleNavbar}
              className="navbar-brand"
            >
              <img src={Logo} alt="logo" />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to="/" 
                    onClick={e => e.preventDefault()}
                    className="nav-link"
                  >
                    Home
                    
                  </Link>

               
                </li>

                <li className="nav-item">
                          <Link
                            to="/services"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Services
                          </Link>
                      <div>
                        
                          <ul className="dropdown-menu menu_one_mega">
                            <div className="mega_menu_fl">
                            
                            <div className="menu111">
                            <h4>Links</h4>
                    <li className="nav-item">
                      <Link
                        to="/services-1"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Service 1
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/services-2"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Service 2
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/services-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Service 3
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Service 4
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Service 5
                      </Link>
                    </li>
                    </div>
                    <div className="menu222">
                      <h4>Categories</h4>
                    <li className="nav-item">
                      <Link
                        to="/services-1"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 1
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/services-2"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 2
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/services-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 3
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 4
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 5
                      </Link>
                    </li>
                    </div>


                    <div className="menu333">
                      <h4>About </h4>
                    <li className="nav-item">
                      <Link
                        to="/services-1"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 1
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/services-2"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 2
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/services-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 3
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 4
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 5
                      </Link>
                    </li>
                    </div>
                    <div className="menu444">
                      <h4>Contact </h4>
                    <li className="nav-item">
                      <Link
                        to="/services-1"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 1
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/services-2"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 2
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/services-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 3
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 4
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        to="/services-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Category 5
                      </Link>
                    </li>
                    </div>
                    </div>
                    
                  </ul>
                  </div>
                  </li>

               
                <li className="nav-item">
                          <Link
                            to="/company"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            Company
                          </Link>
                        </li>
            
                <li className="nav-item">
                  <Link
                    to="/contact"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="others-option">
           
              <Link to="/contact" className="btn btn-primary">
                Support
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default NavbarStyleFour
