import React from "react";
import { Link } from "react-router-dom";

function LiveNavBar() {
  return (
    <nav className='navBar App'>
      <div className='navBar-content'>
        <div>
          <Link to='/'>
            <button id='pollinglistbtn' className='btn'>
              <i className='fa fa-home' aria-hidden='true'></i>
            </button>
          </Link>
          <span className='live-navbar-logo'>Aire</span>
        </div>
      </div>
    </nav>
  );
}

export default LiveNavBar;
