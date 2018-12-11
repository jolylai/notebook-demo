import React, { PureComponent } from 'react';
import { Menu, Layout, Icon, Avatar } from 'antd';
import Link from 'umi/link';
import GlobalHeader from 'components/GlobalHeader';

import styles from './Header.less';
import favicon from 'assets/favicon.ico';

const Header = Layout.Header;

export default class index extends PureComponent {
  render() {
    const { isMobile } = this.props;
    return (
      <Header className={styles.header}>
        {isMobile ? (
          <GlobalHeader isMobile={isMobile} />
        ) : (
          <div className={styles.headerInner}>
            <div className={styles.left}>
              <div className={styles.logo}>
                <Link to="/">
                  <Avatar src={favicon} />
                  <h1>Logo</h1>
                </Link>
              </div>
              {!isMobile && (
                <Menu mode="horizontal" className={styles.menu}>
                  <Menu.Item key="1">nav 1</Menu.Item>
                  <Menu.Item key="2">nav 2</Menu.Item>
                  <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
              )}
            </div>
            <div>
              <GlobalHeader isMobile={isMobile} />
            </div>
          </div>
        )}
      </Header>
    );
  }
}
