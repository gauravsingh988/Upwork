import React, { useState } from "react";
import "../../../../public/scss/main.scss";
const Page = () => {
  return (
    <div>
      <div className="sidebar_mainsec">
        <ul>
          <li>
            <a href="#">
              <span className="material-icons mr-1">home</span>
              Home
            </a>
            <span>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </li>
          <li>
            <a href="#">
              <span className="material-icons mr-1">article</span>
              Download List
            </a>
            <span>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </li>
          <li>
            <a href="#">
              <span className="material-icons mr-1">storefront</span>
              Import Market
            </a>
            <span>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </li>
          <li>
            <a href="#">
             <span className="material-icons mr-1">flag</span>
              Super
            </a>
            <span>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </li>
          <li>
            <a href="#">
              <span className="material-icons mr-1">dashboard</span>
              Dashboard
            </a>
            <span>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </li>
          <li>
            <a href="#">
              <span className="material-icons mr-1">description</span>
              Reports
            </a>
            <span>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
