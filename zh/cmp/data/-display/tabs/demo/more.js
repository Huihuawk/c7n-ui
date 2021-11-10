import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs } from 'choerodon-ui';

const { TabPane } = Tabs;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      {
        title: 'Tab 3',
        content: 'Content of Tab 3',
        key: '3',
        closable: false,
      },
      { title: 'Tab 4', content: 'Content of Tab 4', key: '4' },
      { title: 'Tab 5', content: 'Content of Tab 5', key: '5' },
      { title: 'Tab 6', content: 'Content of Tab 6', key: '6' },
      { title: 'Tab 7', content: 'Content of Tab 7', key: '7' },
      { title: 'Tab 8', content: 'Content of Tab 8', key: '8' },
      { title: 'Tab 9', content: 'Content of Tab 9', key: '9' },
      { title: 'Tab 10', content: 'Content of Tab 10', key: '10' },
      { title: 'Tab 11', content: 'Content of Tab 11', key: '11' },
      { title: 'Tab 12', content: 'Content of Tab 12', key: '12' },
      { title: 'Tab 13', content: 'Content of Tab 13', key: '13' },
      { title: 'Tab 14', content: 'Content of Tab 14', key: '14' },
      { title: 'Tab 15', content: 'Content of Tab 15', key: '15' },
      { title: 'Tab 16', content: 'Content of Tab 16', key: '16' },
      { title: 'Tab 17', content: 'Content of Tab 17', key: '17' },
      { title: 'Tab 18', content: 'Content of Tab 18', key: '18' },
      { title: 'Tab 19', content: 'Content of Tab 19', key: '19' },
      { title: 'Tab 20', content: 'Content of Tab 20', key: '20' },
      { title: 'Tab 21', content: 'Content of Tab 21', key: '21' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  onChange = (activeKey) => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${(this.newTabIndex += 1)}`;
    panes.push({
      title: 'New Tab',
      content: 'Content of new Tab',
      key: activeKey,
    });
    this.setState({ panes, activeKey });
  };

  remove = (targetKey) => {
    const { activeKey, panes } = this.state;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const getPanes = panes.filter((pane) => pane.key !== targetKey);
    let currentKey = activeKey;
    if (lastIndex >= 0 && activeKey === targetKey) {
      currentKey = getPanes[lastIndex].key;
    }
    this.setState({ panes: getPanes, activeKey: currentKey });
  };

  render() {
    const { activeKey, panes } = this.state;
    return (
      <Tabs
        onChange={this.onChange}
        activeKey={activeKey}
        type="editable-card"
        onEdit={this.onEdit}
        showMore
      >
        {panes.map((pane) => (
          <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
            {pane.content}
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('container'));
