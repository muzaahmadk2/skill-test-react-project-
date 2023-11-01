import React, { useState, useEffect } from "react";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import classes from "./Login.module.css";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [enteredName, setEnteredName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes("@") &&
        enteredPassword.trim().length > 6 &&
        enteredName.trim().length > 3
    );
  }, [enteredEmail, enteredPassword, enteredName]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{7,}$/;
    setPasswordIsValid(passwordRegex.test(enteredPassword));
  };

  const validateNameHandler = () => {
    setNameIsValid(enteredName.trim().length > 4);
  };

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({
      Name: enteredName,
      Email: enteredEmail,
      Password: enteredPassword,
    });
    setEnteredEmail('');
    setEnteredName('');
    setEnteredPassword('');
  };

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <h2>WELCOME BACK!</h2>
        <p>
          To keep connected with us please login with your personal information
        </p>
        <button onClick={handleToggle}>{isToggle ? "Login" : "Sign Up"}</button>
      </div>
      <div className={classes.formcontainer}>
        <h3>{isToggle ? "Create Account !" : "Login To Your Account !"}</h3>
        <div className={classes.icon}>
          <CiFacebook size={30} />
          <AiOutlineGooglePlus size={30} className={classes.bg} />
          <TiSocialLinkedinCircular size={30} />
        </div>
        {isToggle ? <p>or use your Email for registration</p> : ""}
        <div>
          <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.formgroup}>
              <FaRegUser size={13} color={nameIsValid === true ? "" : "red"} />
              <input
                type="text"
                placeholder="Name"
                id="username"
                value={enteredName}
                onChange={nameChangeHandler}
                onBlur={validateNameHandler}
              />
            </div>
            <div className={classes.formgroup}>
              <AiOutlineMail
                size={13}
                color={emailIsValid === true ? "" : "red"}
              />
              <input
                type="email"
                placeholder="Email"
                id="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
            </div>
            <div className={classes.formgroup}>
              <FiLock size={13} color={passwordIsValid === true ? "" : "red"} />
              <input
                type="password"
                placeholder="Password"
                id="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
            </div>
            <button type="submit" disabled={!formIsValid}>
              {isToggle ? "Sign Up" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
