import React from "react";
import styles from "./index.less";

const index = () => {
  return (
    <div className={styles.shape}>
      <ul className={styles.ellipse}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
      </ul>
      <h4>切角效果</h4>
      <ul className={styles.corners}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ul>
      <h4>梯形</h4>
      <ul className={styles.trapezoid}>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
      </ul>
      <h4>饼图</h4>
      <div className={styles.pie} />
    </div>
  );
};

export default index;
