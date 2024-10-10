import { useRef, useState } from "react";
import video from "../Videos/video.mp4";
import "../Styles/VideoPlayer.css"; // Import the CSS file

function VideoPlayer() {
  let videoRef = useRef();

  let [volume, setVolume] = useState(1);

  function videoPause() {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }

  function videoPlay() {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }

  function handleVolume(event) {
    let newVolume = event.target.value;
    setVolume(newVolume);
    videoRef.current.volume = newVolume; // Update video volume
  }

  return (
    <>
    <center><h1>Video Player</h1></center>
      <video width="600" ref={videoRef} className="video-player">
        <source src={video} type="video/mp4" />
      </video>
      <div className="control-container">
        <div className="btn">
          <button onClick={videoPlay} className="click-btn">
            Play
          </button>
          <button onClick={videoPause} className="click-btn">
            Pause
          </button>
        </div>

        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolume}
        />
      </div>
    </>
  );
}

export default VideoPlayer;
