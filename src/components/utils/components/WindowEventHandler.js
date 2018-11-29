import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class WindowEventHandler extends PureComponent {
  static propTypes = {
    eventName: PropTypes.string,
    callback: PropTypes.func,
    useCapture: PropTypes.bool,
  };

  static defaultProps = {
    useCapture: true,
  };

  componentDidMount = () => {
    const { eventName, callback, useCapture } = this.props;
    window.addEventListener(eventName, callback, useCapture);
  };

  componentWillUnmount() {
    const { eventName, callback, useCapture } = this.props;
    window.removeEventListener(eventName, callback, useCapture);
  }

  render() {
    return null;
  }
}
