import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

export default class index extends PureComponent {
  componentDidMount = () => {
    const element = ReactDOM.findDOMNode(this);
    console.log('width', element.offsetWidth);
    console.log('height', element.offsetHeight);
    console.log('clientWith', element.clientWidth);
  };

  render() {
    return (
      <div style={{ padding: '8px', border: '8px solid #eee', width: 60 }}>
        {this.props.children}
      </div>
    );
  }
}
