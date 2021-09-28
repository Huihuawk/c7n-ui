import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from 'choerodon-ui';

ReactDOM.render(
  <div className="example-input">
    <div style={{ marginBottom: 10 }}>
      <Input
        size="large"
        placeholder="large size"
        label="Large"
        maxLength="20"
      />
    </div>
    <div style={{ marginBottom: 10 }}>
      <Input placeholder="default size" />
    </div>
    <Input size="small" placeholder="small size" label="small" />
  </div>,
  document.getElementById('container'),
);
