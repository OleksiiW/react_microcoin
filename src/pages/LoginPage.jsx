import { useState } from "react";

export const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const stylesLP = {
        pageContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', 
            backgroundColor: '#grey', 
            borderRadius: '10px' 
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            backgroundColor: "#808080",
            padding: '20px',
            borderRadius: '20px'
        },
        heading: {
            color: '#FFD700', 
            fontSize: '2.5em',
            textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', 
            transform: 'perspective(500px) rotateX(20deg)', 
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold'
        },
        input: {
            width: '200px',
            height: '30px',
            borderRadius: '5px',
            border: 'none',
            padding: '5px',
            fontSize: '16px'
        },
        button: {
            color: '#fff',
            backgroundColor: '#333',
            border: 'none',
            borderRadius: '5px',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            width: '200px',
            cursor: 'pointer'
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        }
    };

    const LogIn = async (event) => {
        event.preventDefault(); 

        try {
            const response = await fetch('http://127.0.0.1:5000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'login': username,
                    'password': password
                })
            });

            if (!response.ok) {
                throw new Error('Response is not OK');
            }

            const json = await response.json();

            localStorage.setItem('jwtToken', json.access_token);
            localStorage.setItem('userId', json.user_id);
            if (json.role === "Admin") {
                localStorage.setItem('role', 'admin');
                window.location.href = '/panel';
            } else {
                localStorage.setItem('role', 'user');
                window.location.href = '/';
            }
        } catch (error) {
            console.error('Failed to log in', error);
            setErrorMessage(error.message); 
        }
    }

    return (
        <div style={stylesLP.pageContainer}>
            <form onSubmit={LogIn} className="loginform" style={stylesLP.form}>
                <h1 style={stylesLP.heading}>Join - MicroCoin</h1>
                <div>
                    <input required type="text" placeholder="Login" name="login" style={stylesLP.input} value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                <input required type="password" placeholder="Password" name="password" style={stylesLP.input} value={password} onChange={e => setPassword(e.target.value)} />
                </div>

                <div style={stylesLP.buttonContainer}>
                    <button style={stylesLP.button} type='submit'>
                        Log In
                    </button>
                </div>

                {errorMessage && <div>{errorMessage}</div>}
            </form>
        </div>
    )
}
