import React from "react";
import video2 from "../../assets/video/jac2.mp4";

const Video = () => {
  return (
    <div className="video">
      <video
        autoPlay
        loop
        muted
        src={video2}
        className="video__loc"
        width="100%"
      ></video>
    </div>
  );
};

export default Video;
