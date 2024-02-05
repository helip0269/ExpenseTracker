import React, { useState } from 'react';
import './App.css'; // Import global CSS file
import ExpenseForm from './components/ExpenseForm/ExpenseForm'; // Import the ExpenseForm component
import Balance from './components/Balance/Balance';

const App = () => {
  // State to store expenses
  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      {/* Render the Balance component */}
      <Balance transactions={expenses} />
      {/* Render the ExpenseForm component */}
      <ExpenseForm onAddExpense={addExpense} />
      {/* Other components and functionality */}
    </div>
  );
};

export default App;
