import React, { useState } from 'react';
import './ExpenseForm.css'; // Import the CSS file for ExpenseForm

const ExpenseForm = ({ onAddExpense }) => {
  // State variables to store the input values
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if both amount and type are provided
    if (amount && type) {
      // Construct the expense object
      const newExpense = {
        amount: parseFloat(amount),
        type: type,
        date: new Date().toLocaleDateString() // Assuming current date
      };
      // Pass the new expense to the parent component
      onAddExpense(newExpense);
      // Reset the form
      setAmount('');
      setType('');
    } else {
      // Handle error if amount or type is not provided
      alert('Please provide both amount and type');
    }
  };

  return (
    <div className="expense-form-container">
      <h2>Add Expense/Income</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Expense/Income</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
