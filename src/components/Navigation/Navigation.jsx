import React from 'react'

export const Navigation = () => {

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
        <a href="/cabinet" className='cabinet' style={stylesN.link} onMouseOver={e => e.target.style.backgroundColor = stylesN.hover.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = stylesN.link.backgroundColor}>
            <div>Cabinet</div>
        </a>
        <a href="/my_loans" style={stylesN.link} onMouseOver={e => e.target.style.backgroundColor = stylesN.hover.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = stylesN.link.backgroundColor}>
            <div>My Loans</div>
        </a>
        <a href="/" style={stylesN.link} onMouseOver={e => e.target.style.backgroundColor = stylesN.hover.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = stylesN.link.backgroundColor}>
            <div>Take a loan</div>
        </a>
        <a href="/pay" style={stylesN.link} onMouseOver={e => e.target.style.backgroundColor = stylesN.hover.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = stylesN.link.backgroundColor}>
            <div>Pay off loans</div>
        </a>
        <a href="/faq" style={stylesN.link} onMouseOver={e => e.target.style.backgroundColor = stylesN.hover.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = stylesN.link.backgroundColor}>
            <div>FAG</div>
        </a>
    </section>
  )
}
