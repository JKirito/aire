import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className='navBar App'>
      <div className='navBar-content'>
        <div>
          <Link to='/livepolls'>
            <button id='pollinglistbtn' className='btn'>
              <i className='fa fa-clipboard' aria-hidden='true'></i>
            </button>
          </Link>
        </div>
        <div className='ml-auto'>
          <button id='informationbtn' className='btn'>
            <i className='fa fa-info-circle' aria-hidden='true'></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
