import React from "react";
import LiveNavBar from "../NavBar/LiveNavBar";
function Ques(props) {
  return (
    <div>
      <LiveNavBar />
      <h1>Welcome to the Setup page</h1>
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
            // onChange={props.changeHostname}
            // value={props.hostname}
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
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default Ques;
