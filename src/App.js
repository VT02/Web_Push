import React, { useEffect } from "react";
import UserProfile from "./UserProfile";
import TrackEvent from "./TrackEvent";
import initializeSuprsend from "./initializeSuprsend";

const App = () => {
  useEffect(() => {
    initializeSuprsend();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SuprSend User Profile and Event Tracking</h1>
        <UserProfile />
        <TrackEvent />
      </header>
    </div>
  );
};

export default App;
