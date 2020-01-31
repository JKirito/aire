import React from "react";
import { connect } from "react-redux";
import { addPoll } from "../../redux/Polling/pollingActions";
import { changeHostname } from "../../redux/ChangeHandlers/homeActions";

function Home(props) {
  return (
    <div>
      <div className='span-content'>
        <span style={{ color: "#f64c7b" }}>a</span>
        <span style={{ color: "#c77f9f" }}>i</span>
        <span style={{ color: "#a0a1bd" }}>r</span>
        <span style={{ color: "#6dcde0" }}>e</span>
        {/* <span>&nbsp;</span> */}
        <span style={{ color: "#FF6978" }}>2</span>
        <span style={{ color: "#27474E" }}>.</span>
        <span style={{ color: "#7D387D" }}>O</span>
      </div>
      <div>
        <fieldset className='survey-form'>
          <legend>
            <p
              style={{
                color: "#6c757d",
                fontWeight: "400",
                fontStyle: "italic",
                fontSize: "0.7rem",
                padding: "0 0rem",
                marginLeft: "0.3rem"
              }}
            >
              Survey Name
            </p>
          </legend>
          <input
            type='text'
            placeholder='Survey Name'
            id='survey-name'
            onChange={props.changeHostname}
            value={props.hostname}
          />
        </fieldset>
        <div className='center'>
          <input
            type='button'
            style={{
              backgroundColor: "#3f51b5",
              color: "#fff",
              padding: "0.8rem 1rem"
            }}
            value="Let's Get Started"
            className='btn'
            onClick={() => {
              props.addPoll(props.hostname);
              props.changeHostname(null, " ");
            }}
          />
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    livePolls: state.poll.livepolls,
    hostname: state.home.hostname
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addPoll: hostname => {
      // console.log(evt.target);
      if (hostname && hostname !== " ") {
        dispatch(addPoll({ id: 1234, hostname: hostname }));
      }
    },
    changeHostname: (evt, hostname) => {
      if (hostname) {
        dispatch(changeHostname(hostname));
      } else {
        dispatch(changeHostname(evt.target.value));
      }
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
