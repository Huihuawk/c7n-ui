import React from 'react';
import ReactDOM from 'react-dom';
import { DataSet, Table, Button, Switch } from 'choerodon-ui/pro';

const { Column } = Table;

class App extends React.Component {
  userDs = new DataSet({
    primaryKey: 'userid',
    name: 'user',
    autoQuery: true,
    pageSize: 5,
    fields: [
      {
        name: 'userid',
        type: 'string',
        label: '编号',
      },
      {
        name: 'name',
        type: 'intl',
        label: '姓名',
        required: true,
      },
      {
        name: 'age',
        type: 'number',
        label: '年龄',
        max: 100,
        step: 1,
      },
      {
        name: 'sex',
        type: 'string',
        label: '性别',
        lookupCode: 'HR.EMPLOYEE_GENDER',
        required: true,
      },
      { name: 'enable', type: 'boolean', label: '是否开启' },
    ],
    events: {
      submit: ({ data }) => console.log('submit data', data),
    },
  });

  handleEdit = (record) => {
    record.setState('editing', true);
  };

  handleAdd = () => {
    const record = this.userDs.create({}, 0);
    record.setState('editing', true);
  };

  handleReset = () => {
    this.userDs.selected.map((record) => {
      // 勾选新增的数据删除，编辑的重置
      if (record.status === 'add') {
        this.userDs.remove(record);
      } else {
        record.reset();
      }
      return null;
    });
  };

  handleCancel = (record) => {
    if (record.status === 'add') {
      this.userDs.remove(record);
    } else {
      record.reset();
      record.setState('editing', false);
    }
  };

  handleSubmit = async () => {
    const res = await this.userDs.submit();
    // 对应抛出处理
    console.log(res);
  };
  /**
   * 行内操作按钮组
   */
  commands = ({ record }) => {
    const btns = [];
    if (record.getState('editing')) {
      btns.push(
        <a onClick={this.handleSubmit} style={{ marginRight: '0.1rem' }}>
          确认
        </a>,
        <a onClick={() => this.handleCancel(record)}>取消</a>,
      );
    } else {
      btns.push(
        <a
          onClick={() => this.handleEdit(record)}
          disabled={record.status === 'delete'}
        >
          编辑
        </a>,
      );
    }
    return [<span className="action-link">{btns}</span>];
  };

  render() {
    const buttons = [
      <Button icon="playlist_add" onClick={this.handleAdd} key="add">
        新增
      </Button>,
      'save',
      'delete',
      'reset',
      <Button icon="undo" onClick={this.handleReset} key="selectReset">
        勾选重置
      </Button>,
    ];
    return (
      <Table key="user" buttons={buttons} dataSet={this.userDs}>
        <Column name="userid" />
        <Column name="name" editor={(record) => record.getState('editing')} />
        <Column name="age" editor={(record) => record.getState('editing')} />
        <Column name="sex" editor={(record) => record.getState('editing')} />
        <Column
          name="enable"
          editor={(record) => record.getState('editing') && <Switch />}
        />
        <Column
          header="操作"
          align="center"
          renderer={this.commands}
          className="custom-command"
          lock="right"
        />
      </Table>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
