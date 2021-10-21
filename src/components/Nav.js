import React from "react";

const Nav = ({ currentPage, handlePageChange }) => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a
            href="#Home"
            onClick={() => handlePageChange("Home")}
            className={
              currentPage === "Home" ? "navbar-brand active" : "navbar-brand"
            }
          >
            RMM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a
                  href="#Work"
                  onClick={() => handlePageChange("Work")}
                  className={
                    currentPage === "Work" ? "nav-link active" : "nav-link"
                  }
                >
                  {" "}
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#About"
                  onClick={() => handlePageChange("About")}
                  className={
                    currentPage === "About" ? "nav-link active" : "nav-link"
                  }
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#Resume"
                  onClick={() => handlePageChange("Resume")}
                  className={
                    currentPage === "Resume" ? "nav-link active" : "nav-link"
                  }
                >
                  Resume
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#Contact"
                  onClick={() => handlePageChange("Contact")}
                  className={
                    currentPage === "Contact" ? "nav-link active" : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
