import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const styles = {
    body: {
        color: "white",
        fontFamily: "'Roboto', sans-serif",
        textAlign: "center"
    },
    container: {
        width: "300px",
        margin: "225px auto auto 650px",
        border: "1px solid #7289DA",
        padding: "20px",
        borderRadius: "5px",
        backgroundColor: "#2C2F33"
    },
    input: {
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0",
        display: "inline-block",
        border: "1px solid #aaa",
        borderRadius: "4px",
        boxSizing: "border-box"
    },
    button: {
        width: "45%",
        padding: "14px 20px",
        margin: "8px 2%",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "16px"
    },
    payButton: {
        backgroundColor: "#008080",
        color: "white"
    },
    deleteButton: {
        backgroundColor: "#FF4500",
        color: "white"
    }
};

const PayOff = () => {
    
    const [loanId, setLoanId] = useState('');
    const [amount, setAmount] = useState('');

    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.loanId) {
            setLoanId(location.state.loanId);
        }
    }, [location]);


    const handlePayOff = async () => {
        if (!loanId || !amount) {
            alert("Please fill in all the fields.");
            return;
        }
    
        var url = 'http://127.0.0.1:5000/loan';
        var payload = {    
            loan_id: loanId,
            debt: amount	
        };
    
        var jwtToken = localStorage.getItem('jwtToken');
    
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwtToken
                },
                body: JSON.stringify(payload) 
            });
    
            if (!response.ok) {
                throw response;
            }
    
            const data = await response.json();
            alert(data.Message);
        } catch (err) {
            if (err.status === 401) {
                localStorage.removeItem('jwtToken');
                localStorage.removeItem('userId');
                alert("Session timed out, please log in again");
                window.location.href = '/login';
            } else if (err.status === 404) {
                err.json().then(errorMessage => {
                    alert(errorMessage.Error);
                });
            } else {
                console.log(err);
            }
        }
    }

    const handleDelete = async () => {
        if (!loanId) {
            alert('Loan ID cannot be empty');
            return;
        }

        const jwtToken = localStorage.getItem('jwtToken');
        const url = `http://127.0.0.1:5000/loan/${loanId}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${jwtToken}`
                },
            });

            if(response.status === 401){
                alert("Session timed out, please log in again");
                localStorage.removeItem('jwtToken');
                localStorage.removeItem('userId');
                window.location.href = "/login";
                throw new Error('Unauthorized');
            } else if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            alert(`Loan ID: ${loanId} successfully deleted`);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div style={styles.container}>
            <label htmlFor="loanId"><b>Loan ID</b></label>
            <input 
                type="text" 
                placeholder="Enter loan id" 
                id="loanId" 
                required
                style={styles.input}
                value={loanId}
                onChange={e => setLoanId(e.target.value)}
            />

            <div>
                <label htmlFor="amount"><b>Amount:</b></label>
                <input 
                    type="number" 
                    placeholder="0 hrn" 
                    id="amount" 
                    required
                    style={styles.input}
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                />
            </div>

            <button 
                type="submit" 
                id="payButton"
                style={{...styles.button, ...styles.payButton}} 
                onClick={handlePayOff}
            >
                Pay off
            </button>

            <button 
                type="submit" 
                id="deleteButton"
                style={{...styles.button, ...styles.deleteButton}} 
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
};

export default PayOff;