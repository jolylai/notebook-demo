import React from 'react';
import { connect } from 'dva';

import styles from './index.less';

function IndexPage() {
  return (
    <div>
      <h1>Prompt</h1>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
