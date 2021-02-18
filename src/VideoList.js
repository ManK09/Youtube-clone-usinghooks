import React from "react";

import Video from "./Video";

const VideoList = (props) => {
  return (
    <div className="video-list">
      <div style={{ padding: "20px 0" }}>
        <h3 style={{ textAlign: "right", fontSize: "18px", fontWeight: "bold" }}>Videos List</h3>

        <Video data={props.data} onVideoSelected={props.onVideoSelected} />
      </div>
    </div>
  );
};

export default VideoList;

