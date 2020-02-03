import React, { useState, useEffect } from 'react';
import MyNewTable from './Components/Table/MyNewTable';
import HTTPService from './Components/Util/Services/HTTPService';
import Urls from './Components/Util/Constants/UrlConstants';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import FormInputElement from './Components/FormElements/forminputElement';

function App() {
  const [tableConfig, settableConfig] = useState([]);
  const [tableInfo, setTableInfo] = useState([]);
  const [searchInfo, setSearchInfo] = useState('');
  useEffect(async () => {
    let url = Urls.Ip + Urls.tableData
    setTableInfo(await HTTPService(url, 'get', ''))
    let tabelColumnn = [
      { title: 'ID', field: 'id' },
      { title: 'First Name', field: 'firstname' },
      { title: 'Last Name', field: 'lastname' },
      { title: 'ISActive', field: 'isactive' },
      { title: 'Category', field: 'category' },
    ]
    settableConfig(tabelColumnn)
  }, []);
  const filterTableData = async () => {
    let url = Urls.Ip + Urls.filterData
    setTableInfo(await HTTPService(url, 'get', ''))
  }
  return (
    <React.Fragment>
      <Container>
        <br />
        <Row>
          <Col md={12}>
            <h2>Table Assignment-01</h2>
          </Col>
        </Row>        
        <Row>
          <Col md={11}>
            <FormInputElement type={'text'} searchHandler={(e) => setSearchInfo(e.target.value)} label={''} inputValue={searchInfo} inputPlaceHolder={'Search'}></FormInputElement>
          </Col>
          <Col md={1}>
            <br />
            <Button variant="primary" onClick={filterTableData} size="md">Go!</Button>
          </Col>
        </Row>
        <br />
        <Row>
          {tableInfo.length > 0 ? <MyNewTable columns={tableConfig} data={tableInfo}></MyNewTable> : ''}
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
