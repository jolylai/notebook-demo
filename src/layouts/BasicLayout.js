import React from 'react';
import { Link } from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { getMenuData } from '../common/menu';
import styles from './BasicLayout.less';

const { Header, Content, Footer, Sider } = Layout;
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

class BasicLayout extends React.Component {
  state = {
    collapsed: false,
    openKeys: [],
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  onOpenChange = keys => {
    const { openKeys } = this.state;
    const currentOpenKey = keys.pop();
    const newOpenKey = openKeys.includes(currentOpenKey) ? [] : [currentOpenKey];
    this.setState({ openKeys: newOpenKey });
  };

  render() {
    const { collapsed, openKeys } = this.state;
    const { children } = this.props;
    const menuData = getMenuData();

    const menuProps = {
      openKeys,
      theme: 'dark',
      defaultSelectedKeys: ['1'],
      mode: 'inline',
      onOpenChange: this.onOpenChange,
    };

    const siderProps = {
      collapsible: true,
      collapsed: collapsed,
      onCollapse: this.onCollapse,
    };

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider {...siderProps}>
          <div className={styles.logo} />
          <Menu {...menuProps}>{generateMenu(menuData)}</Menu>
        </Sider>
        <Layout>
          <Header className={styles.header} />
          <Content className={styles.content}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2018 Created by Jolylai</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
