import React from "react";
import { Table } from "antd";
import { Resizable } from "react-resizable";
import omit from "omit.js";
import classnames from "classnames";

import styles from "./index.less";

const ResizeableTitle = props => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable width={width} height={0} onResize={onResize}>
      <th {...restProps} />
    </Resizable>
  );
};

export default class ResizeableTable extends React.Component {
  constructor(props) {
    super(props);

    const { columns = [] } = props;
    this.state = {
      columns
    };
  }

  components = {
    header: {
      cell: ResizeableTitle
    }
  };

  handleResize = index => (e, { size }) => {
    this.setState(({ columns }) => {
      const nextColumns = [...columns];
      nextColumns[index] = {
        ...nextColumns[index],
        width: size.width
      };
      return { columns: nextColumns };
    });
  };

  render() {
    const newProps = omit(this.props, ["columns"]);

    const { className, ...restProps } = newProps;

    const cns = classnames({
      [className]: !!className,
      [styles.resizeableTable]: true
    });

    const columns = this.state.columns.map((col, index) => ({
      ...col,
      onHeaderCell: column => ({
        width: column.width,
        onResize: this.handleResize(index)
      })
    }));

    return (
      <Table
        className={cns}
        components={this.components}
        columns={columns}
        {...restProps}
      />
    );
  }
}
