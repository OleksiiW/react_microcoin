import React, { useEffect, useState } from 'react';

const Cabinet = () => {
  const [userInfo, setUserInfo] = useState({
    login: 'No data available',
    full_name: 'No data available',
    passport_number: 'No data available',
    card_number: 'No data available',
    date_of_birth: 'No data available',
    credit_history: 'No data available',
    email: 'No data available',
    phone_number: 'No data available',
  });

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('jwtToken');

    fetch(`http://127.0.0.1:5000/user/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setUserInfo(prevState => ({
        ...prevState,
        ...data
      }));
    })
    .catch((error) => {
      console.error('Error:', error);
      window.location.href = "C:/microcoin/login.html";
      localStorage.removeItem('jwtToken');
      localStorage.removeItem('userId');
      window.location.href = '/login';
      alert('Connection timed out. Please log in again');
    });
  }, []);

  const styles = {
    body: {
      fontFamily: "'Open Sans', sans-serif",
      textAlign: 'center',
      color: '#F8F8F2'
    },
    container: {
      width: 500,
      margin: '5px auto 5px auto',
      border: '1px solid #FF6347',
      borderRadius: 5,
      backgroundColor: '#23272A',
      position: 'relative'
    },
    h1: {
      color: '#FF6347',
      padding: 20,
      fontFamily: "'Merriweather', serif",
      fontSize: '2.5em',
    },
    h2: {
      color: '#FF6347',
      fontFamily: "'Merriweather', serif",
    },
    p: {
      color: '#F8F8F2',
      fontSize: '1.2em'
    },
    infoBlock: {
      margin: 20,
      padding: 10,
      backgroundColor: '#2C2F33',
      borderRadius: 5
    },
    contactInfo: {
      margin: 20,
      padding: 10,
      color: '#F8F8F2',
      fontSize: '1.0em'
    },
    backButton: {
      position: 'absolute',
      top: 10,
      fontSize: '2em',
      color: '#FF6347',
      textDecoration: 'none',
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Micro Coin Cabinet</h1>
      </div>
      <div style={styles.container}>
        <div style={styles.infoBlock}>
          <h2 style={styles.h2}>User Information</h2>
          <p style={styles.p}><strong style={{color: '#0084ff'}}>Login:</strong> {userInfo.login}</p>
          <p style={styles.p}><strong style={{color: '#0084ff'}}>Full Name:</strong> {userInfo.full_name}</p>
          <p style={styles.p}><strong style={{color: '#0084ff'}}>Passport Number:</strong> {userInfo.passport_number}</p>
          <p style={styles.p}><strong style={{color: '#0084ff'}}>Card Number:</strong> {userInfo.card_number}</p>
        </div>
        <div style={styles.infoBlock}>
          <h2 style={styles.h2}>About User</h2>
          <p style={styles.p}><strong style={{color: '#0084ff'}}>Date Of Birth:</strong> {userInfo.date_of_birth}</p>
          <p style={styles.p}><strong style={{color: '#0084ff'}}>Credit History:</strong> {userInfo.credit_history}</p>
          <p style={styles.p}><strong style={{color: '#0084ff'}}>Email:</strong> {userInfo.email}</p>
          <p style={styles.p}><strong style={{color: '#0084ff'}}>Phone Number:</strong> {userInfo.phone_number}</p>
        </div>
        <div style={styles.contactInfo}>
          <p>To delete your account or change the account details, please contact us at admin.micro.coin@gmail.com, clearly specifying what you want to change.</p>
          <p>Contact Phone: +380567434856, we are available Mon-Fri from 9:00 to 16:00.</p>
        </div>
      </div>
    </div>
  );
}

export default Cabinet;
