import React from "react";
import suprsend from "@suprsend/web-sdk";

const TrackEvent = () => {
  const handleEvent = () => {
    suprsend.track("clicked", { page: "Dashboard" });
    console.log("Event tracked: clicked on Dashboard");
  };

  return (
    <div>
      <button onClick={handleEvent}>Track Event</button>
    </div>
  );
};

export default TrackEvent;
