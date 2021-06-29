import React, { useState, useContext, useEffect } from "react";
import styles from "./Registration.module.css";
import GlobalContext from "../../context/globalContext";
import FileBase from "react-file-base64";
const Registration = ({ currentId, setCurrentId }) => {
  const globalContext = useContext(GlobalContext);
  const { postData, updateData, data } = globalContext;
  const [inputData, setInputData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    jobtype: "",
    dob: "",
    picture: "",
  });
  const singleData = currentId ? data.find((p) => p._id === currentId) : null;
  useEffect(() => {
    if (singleData) setInputData(singleData);
    //eslint-disable-next-line
  }, [singleData]);
  const changeHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (currentId) {
      updateData(currentId, inputData);
    } else {
      postData(inputData);
    }
    setInputData({
      fullname: "",
      email: "",
      mobile: "",
      jobtype: "",
      dob: "",
      picture: "",
    });
    setCurrentId(null);
  };
  return (
    <div className={styles.container}>
      {currentId ? <h2>Editing</h2> : <h2>Registation</h2>}
      <form onSubmit={submitHandler}>
        <div className={styles.formWrapper}>
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            name="fullname"
            className={styles.inputField}
            value={inputData.fullname}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles.formWrapper}>
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            name="mobile"
            className={styles.inputField}
            value={inputData.mobile}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles.formWrapper}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            className={styles.inputField}
            value={inputData.email}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles.formWrapper}>
          <label htmlFor="dob">DOB</label>
          <input
            type="date"
            name="dob"
            className={styles.inputField}
            value={inputData.dob}
            onChange={changeHandler}
            required
          />
        </div>
        <div className={styles.formWrapper}>
          <input
            type="radio"
            name="jobtype"
            value="full-time"
            onChange={changeHandler}
            checked={inputData.jobtype === "full-time"}
          />{" "}
          Full-Time
          <input
            type="radio"
            name="jobtype"
            value="part-time"
            onChange={changeHandler}
            checked={inputData.jobtype === "part-time"}
          />{" "}
          Part-Time
          <input
            type="radio"
            name="jobtype"
            value="consultant"
            onChange={changeHandler}
            checked={inputData.jobtype === "consultant"}
          />
          Consultant
        </div>
        <div className={styles.formWrapper}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setInputData({ ...inputData, picture: base64 })
            }
          />
        </div>
        {currentId ? <button>Update data</button> : <button>Add data</button>}
      </form>
    </div>
  );
};

export default Registration;
