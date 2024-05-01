import React from 'react'
import logo from "../images/logo.svg"
import {pagelink,socialLinks} from "../data"

const Nav = () => {
  return (
    <>
    <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo}className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <ul className="nav-links" id="nav-links">
           { pagelink.map((link) => {
                    return(
                      <li key={link.id}>
              <a href={link.href} className="nav-link">
                {link.title}
              </a>
            </li>
                    )
            })}

          </ul>

          <ul className="nav-icons">
            {socialLinks.map((link) => {
                const {id, href,icon} = link;
                return(
                  <li key={id}> 
                  <a
                  rel="noreferrer" 
                    href={href}
                    target="_blank"
                    className="nav-icon"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
                )
            })}
           
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav