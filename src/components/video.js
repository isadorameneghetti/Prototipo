import React from 'react';
import "./video.css";
import video from "../assets/video/Mahindra.mp4";

const VideoPlayer = () => {
  return (
    <video width="700px" controls autoPlay loop>
      <source src={video} type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </video>
  );
};

export default VideoPlayer;