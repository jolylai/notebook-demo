import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { Tree } from 'antd';
import { connect } from 'dva';

const TreeNode = Tree.TreeNode;

@connect(({ orgTree }) => ({ orgTree }))
export default class index extends PureComponent {
  static propTypes = {};

  state = {
    defaultCheckedKeys: [],
  };

  componentDidMount() {
    this.props
      .dispatch({
        type: 'orgTree/query',
        payload: { isRoot: '0', isStation: '0', isStore: '1' },
      })
      .then(res => {
        this.setState({ defaultCheckedKeys: ['19005409'] });
      });
  }
  renderTreeNodes = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <TreeNode title={item.organizationName} key={item.organizationCode} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode title={item.organizationName} key={item.organizationCode} dataRef={item} />;
    });
  };

  render() {
    const {
      orgTree: { data = [] },
    } = this.props;
    const { defaultCheckedKeys } = this.state;

    return (
      <Tree checkable defaultCheckedKeys={defaultCheckedKeys}>
        {this.renderTreeNodes(data)}
      </Tree>
    );
  }
}
