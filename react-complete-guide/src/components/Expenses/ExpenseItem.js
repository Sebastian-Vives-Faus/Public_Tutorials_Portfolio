import React, { useState } from "react";

import { PriceSection } from "../UI/ExpenseItem_Style";
import { ExpenseCard } from "./ExpenseCard";

export const ExpenseItem = (props) => {
  // Instead of creating functions inside the button, we can refer it in our handlers
  // When creating handlers, finish the function name with "Handler"

  const [title, setTitle] = useState(props.expenses.title);
  /**
   * Why CONST?
   * React manages the value, thats why we dont do title = value
   */

  const clickHandler = () => {
    //Pass the pointer
    console.log("Clicked!");
    setTitle("Updated!"); //const setTitle: React.Dispatch<any>
    // SetTitle gets into the queue and re-evaluates the component
  };

  // on[Event] = {}
  return (
    <li>
      <ExpenseCard>
        <h3>{props.expenses.date.toISOString()}</h3>
        <p>{props.expenses.title}</p>

        <PriceSection>
          <p>{props.expenses.amount} MXN</p>
        </PriceSection>
      </ExpenseCard>
    </li>
  );
};
