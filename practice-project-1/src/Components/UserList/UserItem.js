import React from "react";
import { Paper } from "@mui/material";

export const UserItem = (props) => {
  return (
    <div>
      <Paper elevation={1} sx={{bgcolor: '#eebff0', margin: 'auto'}}>
      <p>{props.user.username_input} ({props.user.age_input} years old)</p>
      </Paper>
    </div>
  );
};
