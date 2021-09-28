import React from 'react';
import ReactDOM from 'react-dom';
import { DataSet, Output, Row, Col } from 'choerodon-ui/pro';

class App extends React.Component {
  ds = new DataSet({
    autoCreate: true,
    fields: [
      { name: 'user', type: 'string', label: '用户', defaultValue: [1, 10], required: true, range: true },
    ],
  });

  render() {
    return (
      <Row gutter={10}>
        <Col span={12}>
          <Output dataSet={this.ds} name="user" />
        </Col>
        <Col span={12}>
          <Output range value={[20, 30]} />
        </Col>
        <Col span={24}>
          <Output range={['start', 'end']} value={{ start: 30, end: 50 }} />
        </Col>
        <Col span={24}>
          <Output multiple range value={[[1, 10], [20, 30], [30, 50]]} />
        </Col>
      </Row>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);
