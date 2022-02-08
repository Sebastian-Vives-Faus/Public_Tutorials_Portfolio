import React from "react";

import { ExpenseItem } from "./ExpenseItem";

export const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2>Found no expenses</h2>;
  }

  return (
    <ul>
      {props.items.map((expense) => (
        <ExpenseItem expenses={expense} key={expense.id} />
      ))}
    </ul>
  );
};
