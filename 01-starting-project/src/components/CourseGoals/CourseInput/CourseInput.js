import React, { useState } from "react";

import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const FormControlWrapper = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.invalid ? 'red' : 'black'}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
    background-color: ${props => props.invalid ? '#ffd7d7' : 'transparent'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    /* How to invalidate user inputs bunch of blanks
    If after trimming the input, its length is 0, the
    props.onAddGoal(enteredValue); will NOT be executed */
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return; // Like this, we dont give the user any feedback

      /*
        Challenge! Add red border, red background to input and change color to label to red
      */
    }

    props.onAddGoal(enteredValue);

    // Resets the input value
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControlWrapper invalid={!isValid}> {/* Props */}
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </FormControlWrapper>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
