import React, { PureComponent } from 'react';
import styles from './index.less';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <div className={styles.father}>
          <div className={styles.son}>son</div>
        </div>
        <div className={styles.a}>a</div>
        <div className={styles.b}>b</div>
      </div>
    );
  }
}
