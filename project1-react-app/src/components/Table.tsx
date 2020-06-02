import React from 'react';

interface ITableProps {
  /** Array of items to be rendered in table rows */
  rows: any[];
}

export class Table extends React.Component<ITableProps> {

  // HTML Table:
  // <table><tbody><tr><td>data</td><td>...

  render() {
    return (
      <table>
        <tbody>
          {this.props.rows.map(
            (row: any, i) => {return <tr key={i}><td>{row}</td></tr>}
            )}
        </tbody>
      </table>
    );
  }
}