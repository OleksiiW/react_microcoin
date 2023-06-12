import React, { useState } from 'react';

const Delete = () => {
  const [userId, setUserId] = useState('');
  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState('');

  const handleAboutUser = () => {
    const jwtToken = localStorage.getItem('jwtToken');

    fetch(`http://127.0.0.1:5000/user/${userId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${jwtToken}`
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          setError('Error 404: User not found');
        } else if (response.status === 401) {
          handleUnauthorized();
        } else {
          throw new Error('Server response was not ok.');
        }
      })
      .then(data => {
        setUserInfo(data);
      })
      .catch(error => {
        console.log('There was an error:', error);
      });
  };

  const handleDeleteUser = () => {
    const jwtToken = localStorage.getItem('jwtToken');

    fetch(`http://127.0.0.1:5000/user/${userId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${jwtToken}`
      }
    })
      .then(response => {
        if (response.ok) {
          alert('User deleted successfully!');
        } else if (response.status === 404) {
          setError('Error 404: User not found');
        } else if (response.status === 401) {
          handleUnauthorized();
        } else {
          throw new Error('Server response was not ok.');
        }
      })
      .catch(error => {
        console.log('There was an error:', error);
      });
  };

  const handleUnauthorized = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('userId');
    window.location.replace('/login');
    alert('Session timed out, please log in again');
  };

  const handleChange = event => {
    setUserId(event.target.value);
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}><i>Administrator Delete User</i></h1>
      <div style={formContainerStyle}>
        <label htmlFor="userID" style={labelStyle}><b>User ID</b></label>
        <input
          type="text"
          placeholder="Enter User ID"
          id="userID"
          value={userId}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button onClick={handleAboutUser} style={aboutUserButtonStyle}>About User</button>
        <button onClick={handleDeleteUser} style={deleteButtonStyle}>Delete</button>

        {userInfo && Object.keys(userInfo).length > 0 && (
          <div style={userInfoStyle}>
            <label htmlFor="login">Login:</label>
            <span id="login"> {userInfo.login}</span><br />

            <label htmlFor="fullName">Full Name:</label>
            <span id="fullName"> {userInfo.full_name}</span><br />

            <label htmlFor="passportNumber">Passport Number:</label>
            <span id="passportNumber"> {userInfo.passport_number}</span><br />

            <label htmlFor="cardNumber">Card Number:</label>
            <span id="cardNumber"> {userInfo.card_number}</span><br />

            <label htmlFor="dob">Date Of Birth:</label>
            <span id="dob"> {userInfo.date_of_birth}</span><br />

            <label htmlFor="email">Email:</label>
            <span id="email"> {userInfo.email}</span><br />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <span id="phoneNumber"> {userInfo.phone_number}</span><br />
          </div>
        )}

        {error && <p style={errorStyle}>{error}</p>}
      </div>
    </div>
  );
};

const containerStyle = {
  width: '300px',
  margin: '0 auto',
  marginTop: '100px',
  border: '1px solid #7289DA',
  padding: '20px',
  borderRadius: '5px',
  backgroundColor: '#2C2F33',
  textAlign: 'center',
};

const titleStyle = {
  color: '#FF4500',
  padding: '20px',
  fontSize: '2.5em',
};

const formContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  color: 'white',
};

const inputStyle = {
  width: '100%',
  padding: '12px 20px',
  margin: '8px 0',
  display: 'inline-block',
  border: '1px solid #aaa',
  borderRadius: '4px',
  boxSizing: 'border-box',
};

const aboutUserButtonStyle = {
  backgroundColor: '#FFA500',
  color: 'white',
  width: '100%',
  padding: '14px 20px',
  margin: '8px 0',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
};

const deleteButtonStyle = {
  backgroundColor: '#FF4500',
  color: 'white',
  width: '100%',
  padding: '14px 20px',
  margin: '8px 0',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
};

const userInfoStyle = {
  display: 'block',
  marginTop: '20px',
};

const errorStyle = {
  color: 'red',
};

export default Delete;