import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import WindowEventHandler from '../utils/components/WindowEventHandler';

export default class index extends PureComponent {
  static propTypes = {
    offsetTop: PropTypes.number,
    offsetBottom: PropTypes.number,
    onPin: PropTypes.func,
    onUnpin: PropTypes.func,
  };

  static defaultProps = {
    offsetTop: 0,
  };

  affix = false;

  updatePin() {
    const affix = this.affix;
    const { offsetBottom, offsetTop } = this.props;
    const element = ReactDOM.findDOMNode(this);

    let reallyNum, propNum;
    if (offsetBottom !== undefined) {
      reallyNum = element.getBoundingClientRect().bottom;
    }
  }

  handleWindowScroll = e => {
    console.log('e', e);
  };

  render() {
    const { placeHoldClassName, className, prefix, children } = this.props;
    return (
      <div className={placeHoldClassName}>
        <div>{children}</div>
        <WindowEventHandler eventName={'scroll'} callback={this.handleWindowScroll} />
      </div>
    );
  }
}
