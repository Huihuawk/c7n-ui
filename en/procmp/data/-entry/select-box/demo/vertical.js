import React from 'react';
import ReactDOM from 'react-dom';
import { SelectBox, Row, Col } from 'choerodon-ui/pro';

function handleChange(value, oldValue) {
  console.log('[button new]', value, '[button old]', oldValue);
}

const { Option } = SelectBox;

ReactDOM.render(
  <Row gutter={10}>
    <Col span={2}>
      <h3>single</h3>
    </Col>
    <Col span={2}>
      <SelectBox vertical mode="button" onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="wu">Wu</Option>
      </SelectBox>
    </Col>
    <Col span={2}>
      <h3>multiple</h3>
    </Col>
    <Col span={2}>
      <SelectBox vertical mode="button" multiple onChange={handleChange}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="wu">Wu</Option>
      </SelectBox>
    </Col>
  </Row>,
  document.getElementById('container'),
);
