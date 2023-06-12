import React, { useState, useEffect } from 'react';

const WaitingRoom = () => {
  const [countdown, setCountdown] = useState(3 * 60);

  const styles = {
    body: {
      color: '#FFD700',
      fontFamily: "'Roboto', sans-serif",
      textAlign: 'center'
    },
    container: {
      width: '600px',
      margin: 'auto auto auto 400px',
      border: '1px solid #7289DA',
      padding: '20px',
      borderRadius: '20px',
      backgroundColor: '#2C2F33'
    },
    container2: {
      width: '600px',
      height: '210px',
      margin: '10px auto auto 400px',
      border: '1px solid #7289DA',
      padding: '20px',
      borderRadius: '20px',
      backgroundColor: '#2C2F33'
    },
    h1: {
      padding: '20px',
      fontSize: '3em',
      fontFamily: "'Roboto Slab', serif",
      textShadow: '2px 2px 4px #000000'
    },
    p: {
      padding: '10px',
      fontSize: '1.2em'
    },
    timer: {
      fontSize: '3em'
    },
    h2: {
      padding: '10px',
      fontSize: '2em'
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(countdown / 60)).padStart(2, '0');
  const seconds = String(countdown % 60).padStart(2, '0');

  if (countdown <= 0) {
    window.location.href = '/';
  }

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Micro Coin Verification</h1>
        <p style={styles.p}>
            Please send a picture of the first page of your passport, 
            your face, and a piece of white paper with the inscription 
            "Only for microcoin" to 
            <a href="mailto:admin.micro.coin@gmail.com">admin.micro.coin@gmail.com</a>. 
            The inscription can be made in any way, for example, watermark or on the phone. 
            All this should be in one photo.
        </p>
      </div>
      <div style={styles.container2}>
        <h2 style={styles.h2}>You will be redirected in:</h2>
        <p id="timer" style={styles.timer}>{`${minutes}:${seconds}`}</p>
      </div>
    </div>
  );
};

export default WaitingRoom;
