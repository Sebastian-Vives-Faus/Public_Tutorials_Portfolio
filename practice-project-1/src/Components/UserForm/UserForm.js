import React, {useState} from "react";

// MUI Imports
import { Button, TextField, ThemeProvider } from "@mui/material";

// Style imports
import { FormWrapper } from "./styles";
import { theme } from "../../globalStyle";
import { ErrorModal } from "./ErrorModal";

export const UserForm = (props) => {
  
    const [userData, setUserData] = useState({
        username_input: "",
        age_input: null,
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [openModal, setOpenModal] = useState(false);

    const handleChange = (event) => {
        setUserData( prevState => {
            return {...prevState, [event.target.id]: event.target.value};
        } )
    }

    const handleModal = () => {
        setOpenModal(!openModal)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(userData);

        // Input Validation
        if(userData.username_input.length === 0 || userData.age_input === 0){
            setErrorMessage("Invalid Input: Can't register an empty username or with age 0.")
            handleModal();
            return;
        }

        if(userData.age_input < 0){
            setErrorMessage("Invalid Input: Can't register an age lower than 0")
            handleModal();
            return;
        }


        props.addUser(userData);
        setUserData({
            username_input: "",
            age_input: 0,
        });
    }

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <ErrorModal open={openModal} error={errorMessage} closeModal={handleModal}></ErrorModal>
          <FormWrapper>
            <TextField
              id="username_input"
              label="Username"
              variante="outlined"
              primary
              margin="normal"
              onChange={handleChange}
              value={userData.username_input}
            />
            <TextField
              id="age_input"
              label="Age (in years)"
              variante="outlined"
              primary
              margin="normal"
              type={"number"}
              onChange={handleChange}
              value={userData.age_input}
            />
            <Button variant="outlined" primary type="submit">
              Add user
            </Button>
          </FormWrapper>
        </ThemeProvider>
      </form>
    </div>
  );
}
