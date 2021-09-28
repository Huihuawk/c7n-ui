import React from 'react';
import ReactDOM from 'react-dom';
import { Upload } from 'choerodon-ui/pro';

class App extends React.Component {
  render() {
    const props = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      multiple: true,
      accept: ['.deb', '.txt', '.pdf', 'image/*'],
      uploadImmediately: false,
      withCredentials: false,
      partialUpload: true,
      appendUpload: true,
    };

    return <Upload {...props} />;
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
