import React, { useEffect, useState } from 'react';

const MyLoans = () => {
    const [loans, setLoans] = useState([]);
	
	const style = {
		body: {
			color: 'white',
			fontFamily: "'Roboto', sans-serif",
			textAlign: 'center'
		},
		container: {
			width: '90%',
			maxWidth: '600px',
			margin: '0 auto',
			marginTop: '20px',
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
		loanContainer: {
			marginBottom: '20px',
			padding: '20px',
			border: '1px solid #7289DA',
			borderRadius: '5px',
			cursor: 'pointer'
		},
		loanDetails: {
			margin: '0',
			marginBottom: '10px',
			padding: '0'
		},
	};

    useEffect(() => {
		const jwtToken = localStorage.getItem('jwtToken');
		const userId = localStorage.getItem('userId');

		if (jwtToken === null || userId === null) {                          
			alert("Session timed out, please log in again");                 
			window.location.href = "/login";                                 
			return;
		}

		fetch(`http://127.0.0.1:5000/user/loan/${userId}`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${jwtToken}`,
				'Content-Type': 'application/json',
			},
		})
		.then(response => {
			if (!response.ok) {
				throw response.status;
			}
			return response.json();
		})
		.then(data => {
			if (data.loans.length === 0) {
				alert("No loans found for this user.");
				return;
			}
			setLoans(data.loans);
		})
		.catch(error => {
			if (error === 404) {
				alert("User not found.");
			} else if (error === 401) {
				alert("Session timed out, please log in again");
				localStorage.removeItem('jwtToken');
				localStorage.removeItem('userId');
				window.location.href = "/login";
			} else {
				alert("An unknown error occurred.");
			}
		});
    }, []);

    return (
		<div style={style.body}>
			<div style={style.container}>
            <h1 style={style.h1}>Micro Coin - Your Loan(-s)</h1>
				{loans.map((loan, index) => (
					<div key={index} data-test="loanContainer" style={style.loanContainer} onClick={() => window.location.href = '/pay'}>
						<p style={style.loanDetails} data-test="loanDetails"><strong>Loan ID:</strong> {loan.loan_id}</p>
						<p style={style.loanDetails} data-test="loanDetails"><strong>Debt:</strong> {loan.debt} <strong>hrn</strong></p>
						<p style={style.loanDetails} data-test="loanDetails"><strong>Date:</strong> {loan.date}</p>
					</div>
				))}
			</div>
		</div>
    );
};

export default MyLoans;
