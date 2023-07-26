import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../assets/animation.json'; // Replace with your animation file path

const LottieAnimation = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ width: '100%', height: 'auto' }} // Height set to 'auto' for responsiveness
      />
    </div>
  );
};

export default LottieAnimation;
