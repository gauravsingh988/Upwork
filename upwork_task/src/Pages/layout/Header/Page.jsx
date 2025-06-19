import React, { useState } from "react";

const Page = ({ onToggle }) => {
  return (
    <div>
      <div className="header_mainsec">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand text-white" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="material-icons text-white">menu</span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link header_nav" href="#">
                  C-L : 0
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  EXP : <span className="text-danger">58350</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">BAL : 92,566,865,582</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">
                  P|L : <span className="text-succuss">92,566,865,582</span>
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <div className="search_icon">
                <i className="fa fa-search" aria-hidden="true"></i>

                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search Sports"
                  aria-label="Search"
                />
              </div>

              <div className="profile_dropdown">
                <div class="btn-group">
                  <button
                    type="button"
                    className="btn"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user"></i> <span> User Name</span>{" "}
                    <i className="fa fa-angle-down"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button">
                      Profile
                    </button>
                    <button className="dropdown-item" type="button">
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </nav>
        <div className="mobile_viewmenu">
          
          <div className="d-flex align-items-baseline">
           <button className="btn btntoggle text-white" onClick={onToggle}>
            <i className="fa fa-bars"></i>
          </button>
            <ul>
              <li>
                <a className="">C-L : 0</a>
              </li>
              <li>
                <a className="">EXP : <span className="text-danger">58350</span></a>
              </li>
              <li>
                <a className="">BAL : 92,566,865,582</a>
              </li>
              <li>
                <a className="">P|L : <span className="text-succuss">92,566,865</span></a>
              </li>
            </ul>
            <div className="profile_dropdown">
              <div class="btn-group">
                <button
                  type="button"
                  className="btn"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-user"></i> <span> User Name</span>{" "}
                  <i className="fa fa-angle-down"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                    <button className="dropdown-item" type="button">
                      Profile
                    </button>
                    <button className="dropdown-item" type="button">
                      Logout
                    </button>
                  </div>
              </div>
            </div>
          </div>
          <div className="search_icon">
            <i className="fa fa-search" aria-hidden="true"></i>

            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Sports"
              aria-label="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
