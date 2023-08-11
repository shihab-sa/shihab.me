// Portfolio.js

import React from "react";
import "./Sidebar.css"; // Import the CSS file for styling

const Sidebar = () => {
  return (
    <aside>
      <a href="#home" className="nav_logo"></a>

      <nav className="nav">
        <nav className="nav__menu">
          <ul className="nav_list">
            <li className="nav_items">
              <a href="#home" className="nav_link">
                <i class="fi fi-rr-home"></i>
              </a>
            </li>

            <li className="nav_items">
              <a href="#users" className="nav_link">
                <i class="fi fi-rr-user"></i>
              </a>
            </li>

            <li className="nav_items">
              <a href="#work" className="nav_link">
                <i class="fi fi-rr-edit"></i>
              </a>
            </li>

            <li className="nav_items">
              <a href="#apps" className="nav_link">
                <i class="fi fi-rr-apps"></i>
              </a>
            </li>

            <li className="nav_items">
              <a href="#slider" className="nav_link">
                <i class="fi fi-rr-settings-sliders"></i>
              </a>
            </li>
            <li className="nav_items">
              <a href="#love" className="nav_link">
                <i class="fi fi-rr-heart"></i>
              </a>
            </li>
          </ul>
        </nav>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; Shihab 2023</span>
      </div>
    </aside>
  );
};

export default Sidebar;

// end of 38
