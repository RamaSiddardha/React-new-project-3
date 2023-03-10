import classes from "./AddUser.module.css";
import Card from "./UI/Card";
import Button from "./UI/Button";
import React from "react";
import ErrorModel from "./UI/ErrorModel";

function AddUser(props) {
  const [enteredUser, setUser] = React.useState("");
  const [enteredAge, setAge] = React.useState("");
  const [Error, setError] = React.useState();

  const AddUserHandler = (e) => {
    setUser(e.target.value);
  };
  const AgeHandler = (e) => {
    setAge(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredUser.trim().length === 0) {
      setError({
        title: "Invalid User Name",
        message: "Please Enter Vlid User name(User Name cant be Empty)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter Vlid Age(Age > 0)",
      });
      return;
    }
    props.onUser(enteredUser, enteredAge);
    setUser("");
    setAge("");
  };

const ErrorHandler=()=>{
    setError(null)
}

  return (
    <React.Fragment>
      {Error && <ErrorModel title={Error.title} message={Error.message} onOk={ErrorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="AddUser">User Name </label>
          <input
            id="AddUser"
            type="Text"
            onChange={AddUserHandler}
            value={enteredUser}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="Number"
            onChange={AgeHandler}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      </React.Fragment>
  );
}

export default AddUser;
