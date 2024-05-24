import React, { useState } from 'react';
import axios from 'axios';
//import '../css/MainApp.css';

function LoanCalculator() {
  const [loans, setLoans] = useState([
    { owner: '', amount: '', interest: '', minimum_payment: '', cost: '0', fine: '' }
  ]);

  const [monthlyPayment, setMonthlyPayment] = useState('');

  const addLoan = () => {
    const newLoan = { id: Date.now(), owner: '', amount: '', interest: '', minimum_payment: '',cost: '0', fine: '' };
    setLoans([...loans, newLoan]);
  };

  const removeLoan = (idToRemove) => {
    const filteredLoans = loans.filter(loan => loan.id !== idToRemove);
    setLoans(filteredLoans);
  };

  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = () => {
    for (let loan of loans) {
      if (!loan.owner || !loan.amount || !loan.interest || !loan.minimum_payment || !loan.fine) {
          alert("Please fill in all the fields before submitting.");
          return;
      }

    axios.post('https://portfolio-backend-b7enjhlbya-lz.a.run.app/api/calculate', { loans, monthlyPayment }, { responseType: 'blob' })
      .then(response => {
        const imageBlob = new Blob([response.data], { type: 'image/png' });
        const imageUrl = URL.createObjectURL(imageBlob);
        setImageUrl(imageUrl);
        setError(null);
      })
      .catch(err => {
        setError(err);
      });

  }

  // Check if the monthlyPayment field is empty
  if (!monthlyPayment) {
      alert("Please fill in the monthly payment before submitting.");
      return;
  }
  };

  return (
    <div className="container loan-calculator-container">
      <h2 className="center-text loan-title">Loan_Calculator</h2>
      {loans.map((loan, idx) => (
       <div key={loan.id} className="loan-entry single-loan">
          <input
            type="text"
            className="owner-input"
            placeholder="Name"
            onChange={e => {
              const newList = [...loans];
              newList[idx].owner = e.target.value;
              setLoans(newList);
            }}
            required
          />
          <input
            type="text"
            className="amount-input"
            placeholder="Amount"
            onChange={e => {
              const newList = [...loans];
              newList[idx].amount = e.target.value;
              setLoans(newList);
            }}
            required
          />
          <input
            type="text"
            className="interest-input"
            placeholder="Interest"
            onChange={e => {
              const newList = [...loans];
              newList[idx].interest = e.target.value;
              setLoans(newList);
            }}
            required
          />
          <input
            type="text"
            className="min-payment-input"
            placeholder="Minimum payment"
            onChange={e => {
              const newList = [...loans];
              newList[idx].minimum_payment = e.target.value;
              setLoans(newList);
            }}
            required
          />
          <input
            type="text"
            className="fine-input"
            placeholder="Fine"
            onChange={e => {
              const newList = [...loans];
              newList[idx].fine = e.target.value;
              setLoans(newList);
            }}
            required
          />
          <button className="remove-btn" onClick={() => removeLoan(loan.id)}>Remove</button>
        </div>
      ))}
      <button className="add-loan-btn" onClick={addLoan}>Add Loan</button>
      <div className="center-container payment-container">
        <label className="Payment-Text"> (Monthly budget) </label>
        <input
          type="number"
          className="budget-input monthly-payment-input"
          placeholder=""
          value={monthlyPayment}
          onChange={e => setMonthlyPayment(e.target.value)}
        />
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>
      <div className='frame image-frame'>
        {imageUrl ? <img className="calculated-graph" src={imageUrl} alt="Calculated graph" /> : ""}
        {error && <div className="error-message">An error occurred: {error.message}, please re-enter the correct information.</div>}
      </div>
    </div>
);

}

export default LoanCalculator;
