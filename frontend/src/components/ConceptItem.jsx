import React from "react";
import styles from "../css/Chat.module.css";

const ConceptItem = ({ concept, onClick }) => {
  return (
    <div
      // className={styles.conceptitem}
      style={{
        display: "flex",
        width: "210px",
        marginTop: "5px",
        padding: "6px",
        backgroundColor: "#f1f1f1",
        gap: "2px",
        borderRadius: "2px",
        fontSize: "17px",
        cursor: "pointer",
        justifyContent: "center",
      }}
      onClick={() => onClick(concept.id)}
    >
      {" "}
      {concept.name}
    </div>
  );
};

export default ConceptItem;
