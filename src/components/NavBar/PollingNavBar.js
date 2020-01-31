import React from "react";
import { Link } from "react-router-dom";

function PollingNavBar() {
  return (
    <nav className='navBar App'>
      <div className='navBar-content'>
        <div>
          <Link to='/livepolls'>
            <button id='pollinglistbtn' className='btn'>
              <i className='fa fa-arrow-left' aria-hidden='true'></i>
            </button>
          </Link>
          <span className='live-navbar-logo'>Back</span>
        </div>
      </div>
    </nav>
  );
}

export default PollingNavBar;
