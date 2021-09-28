import React from 'react';
import ReactDOM from 'react-dom';
import { DataSet, Table, Button } from 'choerodon-ui/pro';

const config = {
  primaryKey: 'userid',
  name: 'user',
  autoQuery: true,
  pageSize: 5,
  queryFields: [
    { name: 'name', type: 'string', label: '姓名', defaultValue: 'Hugh' },
    { name: 'age', type: 'number', label: '年龄' },
    { name: 'code', type: 'object', label: '代码描述', lovCode: 'LOV_CODE' },
    {
      name: 'sex',
      type: 'string',
      label: '性别',
      lookupCode: 'HR.EMPLOYEE_GENDER',
    },
    { name: 'date.startDate', type: 'date', label: '开始日期' },
    {
      name: 'sexMultiple',
      type: 'string',
      label: '性别（多值）',
      lookupCode: 'HR.EMPLOYEE_GENDER',
      multiple: true,
    },
  ],
  fields: [
    { name: 'userid', type: 'string', label: '编号', required: true },
    { name: 'name', type: 'string', label: '姓名' },
    { name: 'age', type: 'number', label: '年龄', max: 100, step: 1 },
    {
      name: 'sex',
      type: 'string',
      label: '性别',
      lookupCode: 'HR.EMPLOYEE_GENDER',
    },
    {
      name: 'date.startDate',
      type: 'date',
      label: '开始日期',
      defaultValue: new Date(),
    },
    {
      name: 'sexMultiple',
      type: 'string',
      label: '性别（多值）',
      lookupCode: 'HR.EMPLOYEE_GENDER',
      multiple: true,
    },
  ],
  events: {
    query: ({ params, data }) =>
      console.log('filterbar query parameter', params, data),
  },
};

class App extends React.Component {
  handleClick = () =>
    this.setState({
      show: !this.state.show,
      ds: this.state.show ? this.ds2 : this.ds1,
    });

  handleSearchAge = () => {
    const {
      ds,
      ds: { queryDataSet },
    } = this;
    if (queryDataSet) {
      const { current } = queryDataSet;
      if (current) {
        current.set('age', 18);
        ds.query();
      }
    }
  };

  buttons = [
    <Button key="change" funcType="flat" onClick={this.handleClick}>
      切换列显示
    </Button>,
    <Button key="age" funcType="flat" onClick={this.handleSearchAge}>
      查询18岁
    </Button>,
  ];

  ds1 = new DataSet(config);

  ds2 = new DataSet(config);

  state = {
    show: false,
    ds: this.ds1,
  };

  getColumns() {
    const { show } = this.state;
    return [
      { name: 'name', width: 250 },
      { name: 'age' },
      { name: 'sex' },
      { name: 'sexMultiple' },
      show ? { header: '操作' } : null,
    ];
  }

  render() {
    return (
      <Table
        highLightRow={false}
        dataSet={this.state.ds}
        queryBar="bar"
        border={false}
        columnResizable={false}
        buttons={this.buttons}
        columns={this.getColumns()}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
