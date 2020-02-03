import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import Table from 'react-bootstrap/Table'

const MyNewTable = (props) => {
  return (
    <React.Fragment>
      <div className='container'>
          <Table   bordered hover>
          <TableHeader columns={props.columns}></TableHeader>
          <TableBody columns={props.columns} data={props.data}></TableBody>
        </Table>
      </div>
    </React.Fragment>
  );
}

export default MyNewTable;
