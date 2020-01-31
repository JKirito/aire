import React from "react";
import Poll from "./Poll";
import { connect } from "react-redux";
import LiveNavBar from "../NavBar/LiveNavBar";

function LivePoll(props) {
  // console.log(props);
  return (
    <div>
      <LiveNavBar />
      <div id='live-poll-heading'>
        <span>Live Polls</span>
      </div>
      <div className='poll-container'>
        {props.livepolls.map(poll => {
          return <Poll key={poll.id} hostname={poll.hostname} id={poll.id} />;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    livepolls: state.poll.livepolls
  };
};

export default connect(mapStateToProps)(LivePoll);
