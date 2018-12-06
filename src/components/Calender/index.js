import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { getMonthData } from './utils';
import './index.less';

export default class index extends PureComponent {
  // static propTypes = {};
  state = {
    monthData: getMonthData(),
  };

  renderHead() {
    return (
      <thead>
        <tr>Dec, 17</tr>
        <tr>
          <th>S</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
        </tr>
      </thead>
    );
  }

  renderBody(arr) {
    return (
      <tbody>
        {arr.map((data, i) => (
          <tr key={i}>
            {data.map((item, j) => (
              <td key={`${i}-${j}`}>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    const { monthData } = this.state;
    return (
      <table className="joly-calendar">
        {this.renderHead()}
        {this.renderBody(monthData)}
      </table>
    );
  }
}
