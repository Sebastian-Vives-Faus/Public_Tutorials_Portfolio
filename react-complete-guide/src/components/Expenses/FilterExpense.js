import React from "react";
import { Wrapper } from "../UI/ExpenseItem_Style";

export const FilterExpense = (props) => {
  //const [filteredYear, setFilteredYear] = React.useState(null);

  // No need to create a state

  const handleChange = (event) => {
    //console.log(event.target.value);

    // Pointer from Expenses
    props.onFilterChange(event.target.value);
  };

  return (
    <div>
      <Wrapper>
        <label>Filter by Year</label>
        <select onChange={handleChange} value={props.selected}>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
          <option value={2019}>2019</option>
        </select>
      </Wrapper>
    </div>
  );
};
