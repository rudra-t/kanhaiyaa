import React from "react";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand fs-3" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="navbar-toggler-icon fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#Site">
                  Site
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Testimonials">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
