import React from 'react';

const Pay = () => {
  const style = {
    body: {
      color: 'white',
      fontFamily: "'Roboto', sans-serif",
      textAlign: 'center'
    },
    container: {
      width: '400px',
      margin: '0 auto',
      marginTop: '100px',
      border: '1px solid #7289DA',
      padding: '20px',
      borderRadius: '5px',
      backgroundColor: '#2C2F33'
    },
    h1: {
      color: '#FFFFFF',
      padding: '20px',
      fontSize: '2.5em'
    },
    info: {
      color: '#0084ff',
      fontWeight: 'bold',
      marginTop: '20px',
      fontSize: '1.2em'
    },
    note: {
      color: 'white',
      marginTop: '40px',
      fontSize: '1em'
    },
    link: {
      color: '#0084ff',
      textDecoration: 'none'
    }
  };

  return (
    <div style={style.body}>
      <h1 style={style.h1}>Micro Coin</h1>
      <div style={style.container}>
        <div style={style.info}>
          <p>Recipient: Strotskyi Oleksii Olegovich</p>
          <p>IBAN: UA 27320010000026201330845513</p>
          <p>ІПН/ЄДРПОУ: 3807706298</p>
        </div>
        <div style={style.note}>
          <p>
            In case of questions, we recommend looking at our{' '}
            <a href="/faq">FAQ</a> or contact us via
            email at admin.micro.coin@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pay;