import React from "react";
import styles from "./index.module.less";

const index = () => {
  return (
    <div className={styles.border}>
      <ul>border</ul>
      <div className={styles.buttonGroup}>
        <button className="button glossy brackets">button</button>
        <button>button</button>
        <button>button</button>
        <button>button</button>
        <button>button</button>
        <button>button</button>
        <button>button</button>
        <button>button</button>
        <button>button</button>
        <button>button</button>
        <button>button</button>
      </div>
    </div>
  );
};

export default index;
