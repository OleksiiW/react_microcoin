import React, { useState } from 'react'; 

const Faq = () => {
    const [activeId, setActiveId] = useState(null);

    const styles = {
        body: {
            color: 'white',
            fontFamily: 'Roboto, sans-serif',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        faqBlock: (active) => ({
            margin: '10px',
            border: active ? '1px solid #1E90FF' : '1px solid #FFD700',
            borderRadius: '5px',
            backgroundColor: active ? '#000' : '#2C2F33',
            color: active ? '#1E90FF' : '#FFD700',
            cursor: 'pointer',
            padding: '20px',
            width: '50%',
            marginBottom: '10px'
        }),
        faqBlockP: (active) => ({
            display: active ? 'block' : 'none',
            color: '#1E90FF'
        })
    };
    
    
    const questions = [
        {
        "id": 1,
        "question": "What documents do I need to get a microloan?",
        "answer": "You only need a passport to get a microloan."
        },
        {
        "id": 2,
        "question": "How can I register in the system?",
        "answer": "You can register in the system by visiting C:/microcoin/login.html or in the 'Cabinet' section in the menu."
        },
        {
        "id": 3,
        "question": "What are the data requirements for registration?",
        "answer": "The data requirements will be specified during the registration process."
        },
        {
        "id": 4,
        "question": "How is my creditworthiness determined?",
        "answer": "Your creditworthiness is based on data from the Central Bank, which in turn looks at your income level and credit history."
        },
        {
        "id": 5,
        "question": "How can I get a loan?",
        "answer": "To get a loan, you need to register in the system and click on the big red button in the main menu."
        },
        {
        "id": 6,
        "question": "What is the maximum amount of loan that I can get?",
        "answer": "The maximum amount is 517 000 hrn, but this can change and is not fixed."
        },
        {
        "id": 7,
        "question": "What is the minimum amount of loan that I can get?",
        "answer": "The minimum amount is 100 hrn now, but this can change and is not fixed."
        },
        {
        "id": 8,
        "question": "What is the repayment term?",
        "answer": "The maximum repayment term is one year, with interest accrued monthly."
        },
        {
        "id": 9,
        "question": "What are the interest rates applied to loans?",
        "answer": "The interest rate is 30% per month."
        },
        {
        "id": 10,
        "question": "How can I repay the loan?",
        "answer": "You can make partial payments or pay the entire amount at once. Payment details can be found in the appropriate menu item."
        },
        {
        "id": 11,
        "question": "Can I repay the loan early?",
        "answer": "Yes, you can."
        },
        {
        "id": 12,
        "question": "Will there be a penalty for early repayment of the loan?",
        "answer": "If the loan month has started, it is fully charged."
        },
        {
        "id": 13,
        "question": "Are there any hidden fees or commissions in the system?",
        "answer": "We cover all commission fees."
        },
        {
        "id": 14,
        "question": "What happens if I can't repay the loan on time?",
        "answer": "We will call you and try to resolve this issue with you. Unwillingness to cooperate may lead to court proceedings."
        },
        {
        "id": 15,
        "question": "How can I change my registration data?",
        "answer": "Yes, you can change your registration data, but you need to contact us at admin.micro.coin@gmail.com."
        },
        {
        "id": 16,
        "question": "What can I do if I have problems with receiving or repaying the loan?",
        "answer": "You can reach us at +380567434856 or admin.micro.coin@gmail.com."
        },
        {
        "id": 17,
        "question": "What guarantees are there for the security of my data?",
        "answer": "Your data is securely encrypted. In accordance with Ukrainian laws, we provide data on the microloan to the Central Bank."
        },
        {
        "id": 18,
        "question": "Can I open multiple loans at the same time?",
        "answer": "Yes, you can."
        },
        {
        "id": 19,
        "question": "Can I register if I'm not a citizen of Ukraine?",
        "answer": "Yes, you can."
        },
        {
        "id": 20,
        "question": "Do you have a mobile application for more convenient lending?",
        "answer": "At the moment, it is in development."
        },
        {
        "id": 21,
        "question": "How can I contact the support service?",
        "answer": "You can contact us at +380567434856 or admin.micro.coin@gmail.com."
        }
    ];
    
    
    return (
        <div style={styles.body}>
            <h1>Micro Coin FAQ</h1>
            
            {questions.map(q => (
                <div key={q.id} style={styles.faqBlock(activeId === q.id)} onClick={() => setActiveId(activeId === q.id ? null : q.id)}>
                    <h2>{q.question}</h2>
                    <p style={styles.faqBlockP(activeId === q.id)}>{q.answer}</p>
                </div>
            ))}
        </div>
    );
};

export default Faq;