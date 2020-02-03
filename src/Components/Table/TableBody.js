import React from 'react';
import TableRow from './TableRow';

const TableBody = (props) => {
  return (
    <React.Fragment>
      <tbody>
          {props.data.map(rowdata => (
        <TableRow columns={props.columns} data={rowdata}></TableRow>
      ))}
      </tbody>
    </React.Fragment>
  );
}

export default TableBody;