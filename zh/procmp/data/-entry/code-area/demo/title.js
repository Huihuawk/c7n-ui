import React from 'react';
import ReactDOM from 'react-dom';
import { CodeArea, DataSet, Button } from 'choerodon-ui/pro';
import { Icon } from 'choerodon-ui';
// 处理 codemirror 的SSR问题， 如无需SSR，请用import代替require;
if (typeof window !== 'undefined') {
  // 提供对应语言的语法高亮
  require('codemirror/mode/javascript/javascript');
}
const jsonText = `{
  "compilerOptions": {
    "strictNullChecks": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "jsx": "preserve",
    "noUnusedParameters": true,
    "noUnusedLocals": true,
    "declaration": true,
    "target": "es6",
    "lib": [
      "dom",
      "dom.iterable",
      "es7",
      "es2017.object"]
  },
  "exclude": [
    "node_modules",
    "lib",
    "es"
  ]
}
`;
const style = { height: 525 };

class App extends React.Component {
  state = {
    hiddenContent: false,
  };
  ds = new DataSet({
    autoCreate: true,
    fields: [
      {
        name: 'content',
        type: 'string',
        defaultValue: jsonText,
        required: true,
      },
    ],
  });

  toggleHidden = () => {
    this.setState({ hiddenContent: !this.state.hiddenContent });
  };

  get getIconType() {
    return this.state.hiddenContent
      ? 'baseline-arrow_drop_up'
      : 'baseline-arrow_drop_down';
  }

  getHeader = () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <div>代码区</div>
        <Icon
          type={this.getIconType}
          style={{ marginLeft: '4px' }}
          onClick={this.toggleHidden}
        />
      </div>
      <Button size="small" color="gray">
        Button
      </Button>
    </div>
  );

  get getClassName() {
    return this.state.hiddenContent ? 'hidden-content' : '';
  }

  render() {
    return (
      <div>
        <CodeArea
          dataSet={this.ds}
          name="content"
          style={style}
          className={this.getClassName}
          title={this.getHeader()}
          themeSwitch="idea"
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
