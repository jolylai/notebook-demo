import React, { PureComponent } from 'react';
import { Menu, Icon, Dropdown, Avatar } from 'antd';
import Link from 'umi/link';

import styles from './index.less';

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/">
        <Icon type="setting" />
        个人中心
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">
        <Icon type="user" />
        个人设置
      </Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);

export default class RightContent extends PureComponent {
  render() {
    return (
      <div className={styles.right}>
        <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
          <span className={`${styles.action} ${styles.account}`}>
            <Avatar
              size="small"
              icon="user"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              className={styles.avatar}
              alt="avatar"
            />
            <span className={styles.name}>{'张三' || currentUser.name}</span>
          </span>
        </Dropdown>
      </div>
    );
  }
}
