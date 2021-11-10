import React from 'react';
import ReactDOM from 'react-dom';
import { BarCode } from 'choerodon-ui';

ReactDOM.render(
  <BarCode type="bar" value="123456789" />,
  document.getElementById('container'),
);
