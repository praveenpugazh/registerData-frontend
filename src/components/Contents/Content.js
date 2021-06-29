import React, { useContext, useEffect } from "react";
import styles from "./Content.module.css";
import GlobalContext from "../../context/globalContext";
const Content = ({ setCurrentId }) => {
  const globalContext = useContext(GlobalContext);
  const { getData, data, loading } = globalContext;
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

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
        {!loading ? (
          data.map((item) => (
            <ContentItem
              data={item}
              key={item._id}
              setCurrentId={setCurrentId}
            />
          ))
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </div>
  );
};

const ContentItem = ({ data, setCurrentId }) => {
  const globalContext = useContext(GlobalContext);
  const { deleteData } = globalContext;
  const deleteHandler = (id) => {
    deleteData(id);
  };
  const editHandler = (id) => {
    setCurrentId(id);
  };

  return (
    <div className={styles.content}>
      <h4>{data.fullname}</h4>
      <h4>{data.email}</h4>
      <h4>+91 {data.mobile}</h4>
      <h4>{data.dob}</h4>
      <h4>{data.jobtype}</h4>
      <div className={styles.actions}>
        <span>
          <img src={data.picture} alt="" />
        </span>{" "}
        |{" "}
        <span onClick={() => editHandler(data._id)} className={styles.editBtn}>
          Edit
        </span>{" "}
        |{" "}
        <span
          onClick={() => deleteHandler(data._id)}
          className={styles.deleteBtn}
        >
          Delete
        </span>
      </div>
    </div>
  );
};
export default Content;
