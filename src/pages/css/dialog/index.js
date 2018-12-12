import React from 'react';

import styles from './index.less';

const index = () => {
  return (
    <div>
      <h1>基于 vertical-align 属性的水平垂直居中弹框</h1>
      <div className={styles.container}>
        <dialog>dialog</dialog>
      </div>
    </div>
  );
};

export default index;
