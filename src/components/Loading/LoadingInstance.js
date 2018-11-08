import { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Loading from './Loading';

function isFloat(props) {
  const hasStatic = props.hasOwnProperty('static');
  const hansFloat = props.hasOwnProperty('float');
  if (hansFloat) {
    return props.float;
  }

  return hasStatic ? !props.static : false;
}

function newInstance(props) {
  let div = document.createElement('div');
  div.className = `${props.prefix}-loading-container ${props.containerClass}`;
  document.body.appendChild(div);

  return new Promise(resolve => {
    ReactDOM.render(
      <Loading
        {...props}
        ref={loading => {
          if (loading) {
            resolve({ show: loading.show, container: div });
          }
        }}
      />,
      div
    );
  });
}

export default class Instance extends PureComponent {
  static propTypes = {
    show: PropTypes.bool,
    prefix: PropTypes.string,
    containerClass: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    show: false,
    prefix: 'zent',
    containerClass: '',
    className: '',
  };

  // 因为需要确保内部元素已经 render 完毕，所以使用 did，但是因此带来额外的对 show 字段的判断逻辑
  componentDidUpdate() {
    this.renderLoading();
  }

  componentWillUnmount = () => {
    if (this.instance) {
      this.instance.then(({ container }) => {
        ReactDOM.unmountComponentAtNode(container);
        container.parentNode.removeChild(container);
      });
    }
  };

  renderLoading(target) {
    if (!isFloat(this.props)) {
      return;
    }

    if (!this.instance) {
      if (!target) {
        target = ReactDOM.findDOMNode(this);
      }

      this.instance = newInstance({
        ...this.props,
        target,
      });
    } else if (this.instance) {
      this.instance.then(({ show }) => {
        show && show(this.props);
      });
    }
  }

  render() {
    const float = isFloat(this.props);

    if (!isFloat(this.props)) {
      return (
        <Loading {...this.props} float={float}>
          {this.props.children}
        </Loading>
      );
    }
    return this.props.children || null;
  }
}
