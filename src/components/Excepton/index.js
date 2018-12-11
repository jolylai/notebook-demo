import React, { createElement } from 'react';
import typeConfig from './typeConfig';
import Link from 'umi/link';
import { Button } from 'antd';
import classnames from 'classnames';

import styles from './index.less';

const index = props => {
  const { type, actions, redirect, backText, className } = props;
  const pageType = type in typeConfig ? type : '404';
  const cns = classnames(styles.exception, className);
  return (
    <div className={cns}>
      <div>
        <img src={typeConfig[pageType].img} />
      </div>
      <div>
        <h1>{pageType}</h1>
        <p>{typeConfig[pageType].desc}</p>
        <div>
          {actions ||
            createElement(
              Link,
              {
                to: redirect,
              },
              <Button type="primary">{backText}</Button>
            )}
        </div>
      </div>
    </div>
  );
};

index.defaultProps = {
  backText: '返回首页',
  redirect: '/',
};

export default index;
