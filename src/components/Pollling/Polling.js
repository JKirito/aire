import React from "react";
import { connect } from "react-redux";
import PollingNavBar from "../NavBar/PollingNavBar";
import PollContent from "../LivePolls/PollContent";

function Polling(props) {
  var check = false;
  for (let i = 0; i < props.livepolls.length; i++) {
    if (props.livepolls[i].hostname === props.match.params.hostname) {
      check = true;
      break;
    }
  }
  return (
    <div>
      <PollingNavBar />
      {check && (
        <PollContent
          livepolls={props.livepolls}
          hostname={props.match.params.hostname}
        />
      )}
      {!check && <h1>404</h1>}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    livepolls: state.poll.livepolls
  };
};

export default connect(mapStateToProps)(Polling);
