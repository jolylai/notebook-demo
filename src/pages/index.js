import React from 'react';
import { connect } from 'dva';

import styles from './index.less';
// import cover from '../assets/cover.jpg';

function IndexPage() {
  return (
    <div>
      <div className={styles.add} />
      {/*<div className={styles.box}>
        <nav>
          <h3 className={styles.nav}>导航1</h3>
          <h3 className={styles.nav}>导航1</h3>
          <h3 className={styles.nav}>导航1</h3>
        </nav>
        <section>
          <div className={styles.module}>模块1</div>
        </section>
  </div>*/}
      <div className={styles.test1}>我的高度</div>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
