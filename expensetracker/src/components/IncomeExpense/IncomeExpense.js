import React from 'react';
import './IncomeExpense.css'; // Import CSS for styling

const IncomeExpense = ({ transactions }) => {
  // Calculate total income
  const totalIncome = transactions
    .filter(transaction => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  // Calculate total expenses
  const totalExpenses = transactions
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="income-expense-container">
      <div className="income-tab">
        <h3>Total Income</h3>
        <p>${totalIncome.toFixed(2)}</p>
      </div>
      <div className="expense-tab">
        <h3>Total Expenses</h3>
        <p>${totalExpenses.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
