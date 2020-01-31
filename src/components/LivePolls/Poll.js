import React from "react";
import { Link } from "react-router-dom";

function Poll(props) {
  const hostname = props.hostname;
  const address = `/livepolls/${hostname}`;
  return (
    <div className='poll'>
      <input type='button' value={props.hostname} disabled />
      <span className='enterbtn'>
        <Link to={address}>
          <input type='button' value='Enter' />
        </Link>
      </span>
    </div>
  );
}

export default Poll;
