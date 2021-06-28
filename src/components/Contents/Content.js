import React, { useContext, useEffect } from "react";
import styles from "./Content.module.css";
import GlobalContext from "../../context/globalContext";
const Content = () => {
  const globalContext = useContext(GlobalContext);
  const { getData, data } = globalContext;
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [globalContext]);

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.header}>
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Mobile</h4>
          <h4>DOB</h4>
          <h4>Job Type</h4>
          <h4>Action</h4>
        </div>
        {data.map((item) => (
          <ContentItem data={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

const ContentItem = ({ data }) => {
  const globalContext = useContext(GlobalContext);
  const { deleteData } = globalContext;
  const deleteHandler = (id) => {
    deleteData(id);
  };
  return (
    <div className={styles.content}>
      <h4>{data.fullname}</h4>
      <h4>{data.email}</h4>
      <h4>+91 {data.mobile}</h4>
      <h4>{data.dob}</h4>
      <h4>{data.jobtype}</h4>
      <h4>
        <span>
          <img src={data.picture} alt="" />
        </span>{" "}
        | <span>Edit</span> |{" "}
        <span onClick={() => deleteHandler(data._id)}>Delete</span>
      </h4>
    </div>
  );
};
export default Content;
