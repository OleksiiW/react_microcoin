import React from 'react'

export const LogoType = () => {

    const stylesM = {
        logo: {
            height: '150px',
            overflow: 'hidden',
            borderRadius: '50%',
            width: '150px',
            margin: '0 auto'
        },
        logoContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center' 
        },
        h3: {
            textAlign: 'center' 
        },
        topSection: {
            height: '200px',
            overflow: 'hidden',
            width: '100%',
            backgroundImage: `url(${process.env.PUBLIC_URL + '/sand.jpg'})`, 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }    
    }

  return (
    <section className="LogotypeMicroCoin" style={stylesM.topSection}>
        <div className="logo" style={stylesM.logoContainer}>
            <img src={process.env.PUBLIC_URL + '/logotype.jpg'} alt="logo" style={stylesM.logo}/>
            <h3 style={stylesM.h3}>MicroCoin - Menu:</h3>   
        </div>
    </section>
  )
}
