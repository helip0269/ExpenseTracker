import React, { useState } from 'react';
import './App.css'; // Import global CSS file
import ExpenseForm from './components/ExpenseForm/ExpenseForm'; // Import the ExpenseForm component
import Balance from './components/Balance/Balance'; // Import the Balance component
import History from './components/History/History'; // Import the History component
import IncomeExpense from './components/IncomeExpense/IncomeExpense'; // Import the IncomeExpense component

const App = () => {
  // State to store expenses
  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="app-container">
      <h1 className='title'>Expense Tracker</h1>
      {/* Render the Balance component */}
      <div className="balance-income-container">
        {/* Render the Balance component */}
        <div className="balance">
          <Balance transactions={expenses} />
        </div>
      </div>
      {/* Render the IncomeExpense component just below the Balance component */}
      <div className="balance-income-container">
        <div className="income-expense">
          <IncomeExpense transactions={expenses} />
        </div>
      </div>
      {/* Render the ExpenseForm component */}
      <ExpenseForm onAddExpense={addExpense} />
      {/* Render the History component */}
      <History transactions={expenses} />
      {/* Other components and functionality */}
    </div>
  );
};

export default App;
