import React, { useState, useContext } from "react";
import styles from "./Registration.module.css";
import GlobalContext from "../../context/globalContext";
const Registration = () => {
  const globalContext = useContext(GlobalContext);
  const { postData } = globalContext;
  const [inputData, setInputData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    jobtype: "",
    dob: "",
    picture: "",
  });
  const changeHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    postData(inputData);
    setInputData({
      fullname: "",
      email: "",
      mobile: "",
      jobtype: "",
      dob: "",
      picture: "",
    });
  };
  return (
    <div className={styles.container}>
      <h2>Registation</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="fullname">Name</label>
        <input type="text" name="fullname" onChange={changeHandler} />
        <br />
        <label htmlFor="mobile">Mobile</label>
        <input type="text" name="mobile" onChange={changeHandler} />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={changeHandler} />
        <br />
        <label htmlFor="dob">DOB</label>
        <input type="date" name="dob" onChange={changeHandler} />
        <br />
        <label htmlFor="jobtype">Job Type</label>
        <input type="text" name="jobtype" onChange={changeHandler} />
        <br />
        <label htmlFor="picture">Profile Picture</label>
        <input type="text" name="picture" onChange={changeHandler} />
        <button>Add data</button>
      </form>
    </div>
  );
};

export default Registration;
