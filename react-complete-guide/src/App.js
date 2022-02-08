// Our ROOT Component

import React, { useState } from "react";

// Components

import { Expenses } from './components/Expenses/Expenses';
import { ExpensesChart } from "./components/Expenses/ExpensesChart";
import { NewExpense } from './components/NewExpense/NewExpense';

const initial_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  
  const [expenses, setExpenses] = useState(initial_expenses);

  const saveExpenseDataHandler = (expenseData) => {
  
    // Updating expenses
    // REMEMBER! I depend of the prev state, SO I use the FUNCTION METHOD

    expenseData.date = new Date(expenseData.date);

    setExpenses((prevState) => {
      return [expenseData, ...prevState]
    })

    console.log(expenses);
  };


  return (
    <div>
      <NewExpense onSaveExpenseData={saveExpenseDataHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
