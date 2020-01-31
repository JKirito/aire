import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/Package/HomePage";
import LivePoll from "./components/LivePolls/LivePoll";
import Polling from "./components/Pollling/Polling";
import Ques from "./components/Ques/Ques";

function App() {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/livepolls' exact component={LivePoll} />
          <Route path='/livepolls/:hostname' exact component={Polling} />
          <Route path='/livepolls/:hostname/ques' component={Ques} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
