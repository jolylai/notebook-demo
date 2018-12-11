import React, { PureComponent, Suspense } from 'react';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import Media from 'react-media';
import classnames from 'classnames';
import { Spin, Layout, Icon } from 'antd';

import Context from './MenuContext';
import Header from './Header';

import styles from './StandardLayout.less';

const { Content, Footer } = Layout;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
};

class StandardLayout extends PureComponent {
  getContext() {
    const { location } = this.props;
    return { location };
  }
  render() {
    const { isMobile } = this.props;
    const layout = (
      <Layout>
        <Header isMobile={isMobile} />
        <Content className={isMobile ? styles.mobileContent : styles.content}>
          {this.props.children}
        </Content>
        <Footer className={styles.footer}>
          Copyright
          <Icon type="copyright" />
          2018
        </Footer>
      </Layout>
    );
    return (
      <React.Fragment>
        <ContainerQuery query={query}>
          {params => (
            <Context.Provider value={this.getContext()}>
              <div className={classnames(params)}>{layout}</div>
            </Context.Provider>
          )}
        </ContainerQuery>
        <Suspense callback={<Spin />} />
      </React.Fragment>
    );
  }
}

export default connect()(props => (
  <Media query="(max-width: 599px)">
    {isMobile => <StandardLayout {...props} isMobile={isMobile} />}
  </Media>
));
