import React, { useState } from "react";

import { ExpenseItem } from "./ExpenseItem";
import { ExpensesChart } from "./ExpensesChart";
import { ExpensesList } from "./ExpensesList";
import { FilterExpense } from "./FilterExpense";

export const Expenses = (props) => {
  //const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };

  /* 
    Filter returns a NEW ARRAY, doesn't add to the original
    Don't have to use state, simple transformation before the render / output something
    Shouldn't be that complex, if you get DATA already (props) in the component
    and just wanna change how is rendered, or how many should be rendered

    A simple transformation should be enough
  */
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <ExpensesChart expenses={filteredExpenses} />
      <FilterExpense selected={filteredYear} onFilterChange={filterHandler} />
      <ExpensesList items={filteredExpenses} />
    </>
  );
};

/*
let arr = props.expenses.filter((expense) => {
        return expense.date.getFullYear() === filteredYear; });
        console.log(arr);
*/
