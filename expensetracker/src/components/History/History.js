import React from 'react';
import './History.css'; // Import the CSS file for History

const History = ({ transactions }) => {
  return (
    <div className="history-container">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {transactions.map((transaction, index) => (
          <li key={index} className="transaction-item">
            <div className="transaction-details">
              <span className="transaction-type">{transaction.type}</span>
              <span className="transaction-amount">${transaction.amount.toFixed(2)}</span>
            </div>
            <div className="transaction-date">{transaction.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
