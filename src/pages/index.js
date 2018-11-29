import React from 'react';
import { connect } from 'dva';

import styles from './index.less';
import cover from '../assets/cover.jpg';

function IndexPage() {
  return (
    <div>
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li id="test">
            To get started, edit <code>src/index.js</code> and save to reload.
          </li>
          <li>
            <a href="https://github.com/dvajs/dva">Getting Started</a>
          </li>
        </ul>
      </div>
      <a href="">登录</a>
      <a href="">注册</a>
      <div className={styles.box}>
        <img src={cover} alt="" />
      </div>
      <i className={styles.menuIcon} />
      <i className={styles.dotIcon} />
      <div className={styles.father}>
        <div className="son">son</div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
