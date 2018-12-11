import React, { PureComponent } from 'react';
import Link from 'umi/link';
import logo from 'assets/favicon.ico';
import { Icon } from 'antd';

import RightContent from './RightContent';

import styles from './index.less';

export default class index extends PureComponent {
  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
  };

  render() {
    const { isMobile, collapsed } = this.props;

    return (
      <div className={styles.header}>
        {isMobile && (
          <React.Fragment>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="logo" width="32" />
            </Link>
            <span className={styles.trigger} onClick={this.toggle}>
              <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
            </span>
          </React.Fragment>
        )}
        <RightContent />
      </div>
    );
  }
}
