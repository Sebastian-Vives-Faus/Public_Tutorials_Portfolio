import React, { useState } from "react";

// Style Components
import { Wrapper } from "./style";

// Components
import { ExpenseForm } from "./ExpenseForm";

export const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // Pointer
    props.onSaveExpenseData(expenseData);
  };

  return (
    <div>
      <Wrapper>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </Wrapper>
    </div>
  );
};
