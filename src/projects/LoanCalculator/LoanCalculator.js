import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './LoanCalculator.css';

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

function LoanCalculator() {

  const [loans, setLoans] = useState([
    {
      id: 1,
      owner: 'CarExample',
      amount: '10000',
      interest: '15',
      minimum_payment: '300',
      cost: '0',
      fine: '',
    },
  ]);

  const [chartData, setChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);

  const addLoan = () => {
    const newLoan = { id: Date.now(), owner: '', amount: '', interest: '', minimum_payment: '', cost: '0', fine: '' };
    setLoans([...loans, newLoan]);
  };

  const removeLoan = (idToRemove) => {
    const filteredLoans = loans.filter(loan => loan.id !== idToRemove);
    setLoans(filteredLoans);
  };

  useEffect(() => {
    handleSubmit();
  }, []);


  function getForecast(information) {
    let tempBalance = information.balance;
    let tempCost = 0;
    let forecast = [];
    let log = 0;

    while (information.balance > 0) {
      information.balance = Math.round(information.balance);
      forecast.push(information.balance);

      let monthlyInterest = information.balance * ((information.interest / 100) / 12);
      monthlyInterest = Math.round(monthlyInterest);

      tempCost += monthlyInterest;
      information.balance += monthlyInterest;

      if (information.balance < information.minimum) {
        information.balance = 0;
      } else {
        information.balance -= information.minimum;
      }

      log += 1;
      if (log > 120) {
        information.balance = 0;
      }
    }

    information.forecast = forecast;
    information.totalCost = tempCost; 
    information.balance = tempBalance; 
  }

  const handleSubmit = () => {
    let information = [];
    for (let i = 0; i < loans.length; i++) {
      information.push({
        name: loans[i].owner,
        balance: parseFloat(loans[i].amount),
        interest: parseFloat(loans[i].interest),
        minimum: parseFloat(loans[i].minimum_payment),
        forecast: [],
        totalCost: 0, 
      });
      getForecast(information[i]);
    }

    const chartLabels = information[0]?.forecast.map((_, index) => `${index + 1}`);
    const balanceDatasets = information.map((loan, idx) => ({
      label: loan.name,
      data: loan.forecast,
      borderColor: `hsl(${(idx * 60) % 360}, 70%, 50%)`,
      backgroundColor: `hsl(${(idx * 60) % 360}, 70%, 80%)`,
      tension: 0.4,
    }));

    const barLabels = information.map(loan => loan.name);
    const barData = information.map(loan => loan.totalCost);
    const barDataset = {
      label: 'Total Loan Cost',
      data: barData,
      backgroundColor: barLabels.map((_, idx) => `hsl(${(idx * 60) % 360}, 70%, 60%)`),
    };

    setChartData({
      labels: chartLabels,
      datasets: balanceDatasets,
    });

    setBarChartData({
      labels: barLabels,
      datasets: [barDataset],
    });
  };




  return (
    <div className="container loan-calculator-container">
      <h2 className="center-text loan-title">Loan Calculator</h2>
      {loans.map((loan, idx) => (
        <div key={loan.id} className="loan-entry single-loan">
          <input
            type="text"
            className="owner-input"
            placeholder="Name"
            value={loan.owner} 
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
            value={loan.amount}
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
            value={loan.interest} 
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
            value={loan.minimum_payment} 
            onChange={e => {
              const newList = [...loans];
              newList[idx].minimum_payment = e.target.value;
              setLoans(newList);
            }}
            required
          />
        </div>
      ))}
      {/*<button className="add-loan-btn" onClick={addLoan}>Add Loan</button>*/}
      <div className="center-container payment-container">
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>

      {chartData && (
        <div className="chart-container">
          <h3>Loan Balance Forecast</h3>
          <Line data={chartData} options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Loan Balance Forecast' },
            },
            scales: {
              y: { beginAtZero: true, title: { display: true, text: 'Balance' } },
              x: { title: { display: true, text: 'Time (Months)' } },
            },
          }} />
        </div>
      )}

      {barChartData && (
        <div className="chart-container">
          <h3>Total Loan Costs</h3>
          <Bar data={barChartData} options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'top' },
              title: { display: true, text: 'Price' },
            },
            scales: {
              y: { beginAtZero: true, title: { display: true, text: 'Cost' } },
              x: { title: { display: true, text: 'Loans' } },
            },
          }} />
        </div>
      )}
    </div>
  );
}

export default LoanCalculator;
