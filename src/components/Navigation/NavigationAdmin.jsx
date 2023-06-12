import React from 'react'

export const NavigationAdmin = () => {

    const stylesN = {
        link: {
            color: '#000080', 
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '40px',
            width: '190px',
            backgroundColor: '#D3D3D3', 
            margin: '5px 0',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
        },
        hover: {
            backgroundColor: '#A9A9A9', 
        }
    }

  return (
    <section className="nav">
        <a href="/loans" style={stylesN.link} onMouseOver={e => e.target.style.backgroundColor = stylesN.hover.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = stylesN.link.backgroundColor}>
            <div>Loans and users</div>
        </a>
        <a href="/change" style={stylesN.link} onMouseOver={e => e.target.style.backgroundColor = stylesN.hover.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = stylesN.link.backgroundColor}>
            <div>Change user data</div>
        </a>
        <a href="/delete" style={stylesN.link} onMouseOver={e => e.target.style.backgroundColor = stylesN.hover.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = stylesN.link.backgroundColor}>
            <div>Delete a user</div>
        </a>
        <a href="/pay_off" style={stylesN.link} onMouseOver={e => e.target.style.backgroundColor = stylesN.hover.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = stylesN.link.backgroundColor}>
            <div>Pay off a loan</div>
        </a>
    </section>
  )
}