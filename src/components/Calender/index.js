import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import styles from './index.less';

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, (i + 1) * size)
  );

const getMonthData = (year = new Date().getFullYear(), month = new Date().getMonth() + 1) => {
  const weekOfFirstDate = new Date(year, month - 1, 1).getDay();
  const lastDateOfLastMonth = new Date(year, month - 1, 0).getDate();
  const lastDateOfthisMonth = new Date(year, month, 0).getDate();
  const lastMonthData = Array.from(
    { length: weekOfFirstDate },
    (_, i) => lastDateOfLastMonth - weekOfFirstDate + 1 + i
  );
  const thisMonthData = Array.from({ length: lastDateOfthisMonth }, (_, i) => i + 1);
  const nextMonthData = Array.from(
    { length: 35 - lastMonthData.length - thisMonthData.length },
    (_, i) => i + 1
  );
  return chunk([].concat(lastMonthData, thisMonthData, nextMonthData), 7);
};

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
      <table className={styles.calendar}>
        {this.renderHead()}
        {this.renderBody(monthData)}
      </table>
    );
  }
}
