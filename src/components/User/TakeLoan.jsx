import React, { useState, useEffect } from 'react';

const style = {
    body: {
        color: 'white',
        fontFamily: "'Roboto', sans-serif",
        textAlign: 'center'
    },
    container: {
        width: '350px',
        margin: '0 auto',
        marginTop: '100px',
        border: '1px solid #7289DA',
        padding: '20px',
        borderRadius: '5px',
        backgroundColor: '#2C2F33'
    },
    labelInput: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 0'
    },
    rangeValue: {
        textAlign: 'center',
        color: '#fff'
    },
    logo: {
        height: '150px',
        overflow: 'hidden',
        width: '150px',
        margin: '0 auto',
        borderRadius: '25%'
    },
    button: {
        width: '100%',
        padding: '14px 20px',
        margin: '20px 0 5px 0',  
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        backgroundColor: '#1E90FF',
        color: 'white',
        ':hover': {
            backgroundColor: '#6495ED'
        }
    }
};

function TakeLoan() {
    const [loanAmount, setLoanAmount] = useState(100);
    const [loanDuration, setLoanDuration] = useState(1);
    const [repaymentAmount, setRepaymentAmount] = useState(130.00);

    useEffect(() => {
        const repayment = loanAmount * Math.pow(1.3, loanDuration);
        setRepaymentAmount(repayment.toFixed(2));
    }, [loanAmount, loanDuration]);

    const postLoanData = () => {
        let jwtToken = localStorage.getItem('jwtToken');
        let userId = localStorage.getItem('userId');

        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        let data = {
            user_id: userId,
            debt: loanAmount,
            date: date,
        };

        fetch('http://127.0.0.1:5000/loan', {
            method: 'POST',
            headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + jwtToken
			},
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.status === 200) {     
                window.location.href = '/waiting_room';                                         // istanbul ignore next
                alert('Successful operation!');                                                 // istanbul ignore next
            } else if (response.status === 401) {                                               // istanbul ignore next
				window.location.href = '/login';                                                // istanbul ignore next
				localStorage.removeItem('jwtToken');                                            // istanbul ignore next
				localStorage.removeItem('userId');                                              // istanbul ignore next
                alert('Please log in again, your session has expired');                         // istanbul ignore next
            } else if (response.status === 402) {                                               // istanbul ignore next
                alert('Bank has no reserve');                                                   // istanbul ignore next
            } else if (response.status === 406) {                                               // istanbul ignore next
                alert('The minimum amount is 100 hryvnias');                                    // istanbul ignore next
			} else {                                                                            // istanbul ignore next
                alert('Try again later, if the problem persists, contact technical support');
            }
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div style={style.body}>
            <div onSubmit={useEffect} style={style.container}>
                <img id="logo" src={process.env.PUBLIC_URL + '/coin.jpg'} alt="Microcoin Logo" style={style.logo} />

                <div style={style.labelInput}>
                    <label htmlFor="loanAmount"><b>Microloan amount:</b></label>
                    <input required type="number" id="loanAmount" name="loanAmount" min="100" defaultValue="100" 
                        onChange={(e) => {
                        setLoanAmount(Number(e.target.value));}} 
                    /> 
                    hrn
                </div>

                <label htmlFor="loanDuration"><b>Duration (month/months):</b></label>
                <input type="range"  id="loanDuration" name="loanDuration" min="1" max="12" value={loanDuration} onChange={(e) => setLoanDuration(Number(e.target.value))} />

                <div style={style.rangeValue} id="rangeValue">{loanDuration}</div>

                <label htmlFor="repaymentAmount"><b>Repayment amount:&nbsp;</b></label>
                <input type="text" id="repaymentAmount" name="repaymentAmount" readOnly value={repaymentAmount} /> hrn

                <button type="submit" onClick={postLoanData} style={style.button}>Take a microloan</button>
            </div>
        </div>
    );
}

export default TakeLoan;