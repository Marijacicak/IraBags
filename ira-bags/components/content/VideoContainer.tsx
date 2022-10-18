import classes from "./VideoContainer.module.css";
import React from "react";

export const VideoContainer = () => {
  return (
    <div className={classes["video-container"]}>
      <p>Here should be a video...NOT WORKING</p>
      <video width="100%" height="100%" autoPlay muted loop>
        <source src="../../assets/videos/mainVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
