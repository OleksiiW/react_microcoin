import React from 'react';

const Change = () => {
    const handleSubmit = () => {
        const userId = document.getElementById('userId').value;
        const login = document.getElementById('login').value;
        const fullName = document.getElementById('fullName').value;
        const passportNumber = document.getElementById('passportNumber').value;
        const cardNumber = document.getElementById('cardNumber').value;
        const dob = document.getElementById('dob').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;

        let data = { "user_id": userId };

        if (login) data["login"] = login;
        if (fullName) data["full_name"] = fullName;
        if (passportNumber) data["passport_number"] = passportNumber;
        if (cardNumber) data["card_number"] = cardNumber;
        if (dob) data["date_of_birth"] = dob;
        if (email) data["email"] = email;
        if (phoneNumber) data["phone_number"] = phoneNumber;

        const jwtToken = localStorage.getItem('jwtToken');

        fetch('http://127.0.0.1:5000/user', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwtToken
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw response;
                }
                return response.json();
            })
            .then(data => {
                alert('User has been updated successfully.');
            })
            .catch(err => {
                if (err.status === 404) {
                    alert("Error 404: User not found");
                } else if (err.status === 403) {
                    alert("Error 403: Forbidden, because a user with this data already exists!");
                } else if (err.status === 405) {
                    alert("Error 405: Validation error");
                } else if (err.status === 401) {
                    localStorage.removeItem('jwtToken');
                    localStorage.removeItem('userId');
                    window.location.replace("/login");
                    alert("Session timed out, please log in again");
                }
            });
    };

    const style = {
        body: {
            color: "white",
            fontFamily: "'Roboto', sans-serif",
            textAlign: "center"
        },
        container: {
            width: "500px",
            margin: "0 auto",
            marginTop: "50px",
            border: "1px solid #7289DA",
            padding: "20px",
            borderRadius: "5px",
            backgroundColor: "#2C2F33"
        },
        h1: {
            color: "#FFFFFF",
            padding: "20px",
            fontSize: "2.5em"
        },
        label: {
            display: "block",
            marginTop: "20px",
            marginBottom: "5px"
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
            width: "100%",
            padding: "14px 20px",
            margin: "8px 0",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            backgroundColor: "#1E90FF",
            color: "white"
        }
    };

    return (
        <div style={style.body}>
            <h1 style={style.h1}>Change User Data</h1>
            <div style={style.container}>
                <label htmlFor="userId" style={style.label}>User ID</label>
                <input type="text" id="userId" placeholder="Enter user ID" required style={style.input} />

                <label htmlFor="login" style={style.label}>Login</label>
                <input type="text" id="login" placeholder="Enter Login" required style={style.input} />

                <label htmlFor="fullName" style={style.label}>Full Name</label>
                <input type="text" id="fullName" placeholder="Enter Full Name" required style={style.input} />

                <label htmlFor="passportNumber" style={style.label}>Passport Number</label>
                <input type="text" id="passportNumber" placeholder="Enter Passport Number" required style={style.input} />

                <label htmlFor="cardNumber" style={style.label}>Card Number</label>
                <input type="text" id="cardNumber" placeholder="Enter Card Number" required style={style.input} />

                <label htmlFor="dob" style={style.label}>Date Of Birth</label>
                <input type="text" id="dob" placeholder="YYYY-MM-DD" required style={style.input} />

                <label htmlFor="email" style={style.label}>Email</label>
                <input type="email" id="email" placeholder="Enter Email" required style={style.input} />

                <label htmlFor="phoneNumber" style={style.label}>Phone Number</label>
                <input type="tel" id="phoneNumber" placeholder="Enter Phone Number" required style={style.input} />

                <button type="submit" id="changeButton" style={style.button} onClick={handleSubmit}>
                    Change User Data
                </button>
            </div>
        </div>
    );
};

export default Change;