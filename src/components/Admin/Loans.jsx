import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const style = {
    body: {
        color: "white",
        fontFamily: "'Roboto', sans-serif",
        textAlign: "center"
    },
    container: {
        width: "600px",
        margin: "20px auto auto 350px",
        marginTop: "100px",
        border: "1px solid #7289DA",
        padding: "20px",
        borderRadius: "5px",
        backgroundColor: "#2C2F33"
    },
    h1h2: {
        color: "#FFFFFF",
        padding: "20px",
        fontSize: "2.5em"
    },
    loanItem: {
        border: "1px solid #aaa",
        borderRadius: "4px",
        padding: "10px",
        margin: "10px"
    }
};

const Loans = () => {
    const [reserve, setReserve] = useState("");
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken');

        fetch('http://127.0.0.1:5000/bank/1', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        })
        .then(response => {
            if (!response.ok) {
                if (response.status == 404) {
                    alert('Bank with bank id 1 not found');
                } else if (response.status == 401) {
                    handleUnauthorized();
                }
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setReserve(data.reserve);
        })
        .catch(error => console.error('Error:', error));

        fetch('http://127.0.0.1:5000/loan', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        })
        .then(response => {
            if (!response.ok) {
                if (response.status == 401) {
                    handleUnauthorized();
                }
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setLoans(data.loans);
        })
        .catch(error => console.error('Error:', error));
    }, []);

    const handleUnauthorized = () => {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('role');
        alert('Session timed out, please log in again');
        window.location.href = "/login";
    }

    const roundUp = (num, precision) => {
        let factor = Math.pow(10, precision);
        return Math.ceil(num * factor) / factor;
    }

    const reloadPage = () => {
        setTimeout(() => {
            window.location.reload(); 
        }, 10); // Затримка у 10 мілісекунд (1 секунда === 1000 мс)
    };

    return (
        <div style={style.body}>  
            <div style={style.container}>
                <h1 style={style.h1h2}>Micro Coin - User Debts</h1>
                <div>Bank reserve: {reserve}</div>
                <h2 style={style.h1h2}>All Loans</h2>
                <div>
                    {loans.map((loan) => (
                        <div key={loan.loan_id} style={style.loanItem}>
                            <p>Loan ID: <Link to={{ pathname: "/pay_off", state: { loanId: loan.loan_id } }} onClick={reloadPage}>{loan.loan_id}</Link></p>
                            <p>Debt: {roundUp(loan.debt, 2).toFixed(2)} Microcoins</p>
                            <p>Date: {loan.date}</p>
                            <p>User ID: {loan.user_id}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Loans;