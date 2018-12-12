import React from 'react';
import { connect } from 'dva';

import logo from 'assets/yay.jpg';
import styles from './index.less';

function IndexPage() {
  return (
    <div>
      <div className={styles.box}>
        <img src={logo} />
        <img src={logo} />
        <img src={logo} />
        <img src={logo} />
        <img src={logo} />
      </div>
      <span className={styles['dib-baseline']} />
      <span className={styles['dib-baseline']}>x-baseline</span>
      <span className={styles['dib-baseline']} />
      <div>
        NH<sub>3</sub>HCO<sup>3</sup>
      </div>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
