import React, { PureComponent } from 'react';
import cx from 'classnames';

import './Loading.less';

export default class Loading extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  render() {
    let { prefix, className, containerClass, children, height } = this.props;
    if (!this.props.float) {
      const hasHeightProp = this.props.hasOwnProperty('height');
      if (!children && !height) {
        height = 160;
      } else if (children && !hasHeightProp) {
        height = 'initial';
      }

      return (
        <div
          className={cx(
            `${prefix}-loading-container`,
            `${prefix}-loading-container-static`,
            containerClass,
            { [`${prefix}-loading-container--empty`]: React.Children.count(children) === 0 }
          )}
          style={{ height }}
        >
          {children}
          {this.state.show && (
            <div className={`${prefix}-page-loading ${className}`}>
              <div className={`${prefix}-page-mask`} />
            </div>
          )}
        </div>
      );
    }
    return (
      this.state.show && (
        <div className={`${prefix}-page-loading ${className}`} ref={this.setWrapperRef}>
          <div className={`${prefix}-page-mask`} />
        </div>
      )
    );
  }
}
