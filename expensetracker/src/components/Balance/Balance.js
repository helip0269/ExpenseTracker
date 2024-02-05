import React, { useState, useEffect } from 'react';
import './Balance.css'; // Import the CSS file

const Balance = ({ transactions }) => {
  // Define state to store the balance
  const [balance, setBalance] = useState(0);

  // Calculate the balance based on transactions
  const calculateBalance = () => {
    // Calculate total income
    const income = transactions
      .filter(transaction => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    // Calculate total expenses
    const expenses = transactions
      .filter(transaction => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0);

    // Calculate balance
    return income + expenses;
  };

  // Update balance whenever transactions change
  useEffect(() => {
    setBalance(calculateBalance());
  }, [transactions]);

  return (
    <div className="balance-container">
      <h2 className="balance-heading">Your Balance</h2>
      <h3 className="balance-amount">${balance.toFixed(2)}</h3>
    </div>
  );
};

export default Balance;
