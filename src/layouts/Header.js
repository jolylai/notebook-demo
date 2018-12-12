import React, { PureComponent } from 'react';
import { Menu, Layout, Icon, Avatar } from 'antd';
import Link from 'umi/link';
import GlobalHeader from 'components/GlobalHeader';
import { getMenuData } from 'common/menu';

import styles from './Header.less';
import favicon from 'assets/favicon.ico';

const Header = Layout.Header;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const generateMenuItem = (menuData, key) => {
  const { icon, name, path } = menuData;
  return (
    <MenuItem key={key}>
      <Link to={path}>
        <Icon type={icon} />
        <span>{name}</span>
      </Link>
    </MenuItem>
  );
};

const generateMenuItemGroup = (menuData, parentKey) => {
  return menuData.map((data, index) => generateMenuItem(data, `${parentKey}_${index}`));
};

const generateMenu = menuData => {
  return menuData.map((data, index) => {
    const { icon, name, children } = data;
    if (Array.isArray(children) && children.length > 0) {
      const subMenuTitle = (
        <span>
          <Icon type={icon} />
          <span>{name}</span>
        </span>
      );
      return (
        <SubMenu key={index} title={subMenuTitle}>
          {generateMenuItemGroup(children, index)}
        </SubMenu>
      );
    }
    return generateMenuItem(data, index);
  });
};

export default class index extends PureComponent {
  render() {
    const { isMobile } = this.props;
    const menuData = getMenuData();

    const menuProps = {
      className: styles.menu,
      defaultSelectedKeys: ['1'],
      mode: 'horizontal',
      onOpenChange: this.onOpenChange,
    };

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
              <Menu {...menuProps}>{generateMenu(menuData)}</Menu>
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
