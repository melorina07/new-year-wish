import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';


const WishMessage = ({ userInfo }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 3000 } });
  useEffect(() =>  {
    console.log("Update UserInfo:", userInfo);
  },[userInfo]);
  useEffect(() => {
    const audio = new Audio('/music/new_year_song.mp3');
    
    const playAudio = () => {
      audio.play().catch(error => console.error('Audio playback failed:', error));
    };

    playAudio(); 

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const getMessage = () => {
    console.log("WishMessage UserInfo:", userInfo);
    
     
    if (!userInfo || !userInfo.name || !userInfo.relationship) {
      return "Happy New Year!";
    }
    return `Hey ${userInfo.name}, I am grateful that you are my ${userInfo.relationship}. I wish  you a year filled with peace, joy, and new opportunities! 
    May all your days be full of happiness and success. Cheers to a fantastic New Year ahead!
   `;
  };
  
   return (
    <div className="wish-container">
      <img src="/images/flower1.png" className="flower top-left" alt="Flower Top-Left" />
      <img src="/images/flower2.png" className="flower top-right" alt="Flower Top-Right" />
      <img src="/images/flower3.png" className="flower bottom-left" alt="Flower Bottom-Left" />
      <img src="/images/flower4.png" className="flower bottom-right" alt="Flower Bottom-Right" />
      <video autoPlay muted loop className="background-video">
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <animated.div style={props} className="wish-text">
        <h1>{getMessage()}</h1>
      </animated.div>
    </div>
  );
};

export default WishMessage;
