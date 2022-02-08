import React, { useState } from "react";

// Style Components
import { Wrapper } from "./style";

export const ExpenseForm = (props) => {
  const [formValues, setFormValues] = useState({
    title: "",
    date: new Date(),
    amount: 0,
  });

  const [showForm, setShowForm] = useState(false);

  //Handlers
  const ChangeHandler = (event) => {
    /*
    Whenever you update the STATE, and you DEPEND of the previous state,
    DONT DO THIS:

     setFormValues({
        ...formValues, 
        [event.target.id]: event.target.value
     });

    Instead, you should call it as a function, it will be AUTOMATICALLY
    be executed by React, and it wil recieve the previous state SNAPSHOT
    and will return the NEW State

    setFormValues((prevState) => {
        return {...prevState, [event.target.id]: event.target.value};
    });

    Why do it this way instead of the other?
    - Because of the React Scheduling State Updates
    - With the function method, React GUARANTEES the prevState will be the
      latest state snapshot (keeping all schedule updates in mind)

    */

    setFormValues((prevState) => {
      return { ...prevState, [event.target.id]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the browser to be reloaded

    // Now we can continue with JS!
    // Pointer
    props.onSaveExpenseData(formValues);

    setFormValues({
      title: "",
      date: new Date(),
      amount: 0,
    });

    setShowForm(!showForm);
  };

  // Hide / Show Form
  let formContent = (
    <div>
      <button onClick={() => {setShowForm(!showForm)}}>Add Expense...</button>
    </div>
  );

  if (showForm) {
    formContent = (
      <>
        <Wrapper>
          <div>
            <label>Title:</label>
            <input
              id="title"
              type="text"
              onChange={ChangeHandler}
              value={formValues.title}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              id="date"
              type="date"
              onChange={ChangeHandler}
              value={formValues.date}
            />
          </div>
          <div>
            <label>Amount:</label>
            <input
              id="amount"
              type="number"
              onChange={ChangeHandler}
              value={formValues.amount}
            />
          </div>
        </Wrapper>
        <div>
          <button type="submit">OK!</button>
          <button onClick={() => {setShowForm(!showForm)}}>Cancel</button>
        </div>
      </>
    );
  }

  // Two-Way Binding => value={formValues.title} (in the <input>)

  return <form onSubmit={handleSubmit}>{formContent}</form>;
};
