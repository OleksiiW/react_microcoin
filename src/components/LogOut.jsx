export const LogOut = () => {

    const stylesB = {
        button: {
            color: '#8B0000', 
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
            transition: 'background-color 0.3s',
            position: 'fixed', // Зафіксувати кнопку
            bottom: '5px', // Відступ внизу 5px
            left: '5px', // Відступ зліва 5px
        },
        hover: {
            backgroundColor: '#A9A9A9', 
        }
    }

    const LogOut = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('role');
        window.location.href = '/login';

    }

  return (
    <section className="sidebarButton">
        <button style={stylesB.button} onClick={LogOut}>
            {'\u2190'} Log out
        </button>
    </section>
  )
}
