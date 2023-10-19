import React from 'react';
import { DataSet, Table, TextArea } from 'choerodon-ui/pro';
import { Tag, Badge } from 'choerodon-ui';

const { Column } = Table;

class App extends React.Component {
  userDs = new DataSet({
    primaryKey: 'userid',
    transport: {
      read({ params: { page } }) {
        return {
          url: `/dataset/user/page/10/${page}`,
        };
      },
    },
    autoQuery: true,
    combineSort: true,
    pageSize: 20,
    fields: [
      {
        name: 'userid',
        type: 'string',
        label: '编号',
        required: true,
      },
      {
        name: 'name',
        type: 'intl',
        label: '姓名',
      },
      {
        name: 'age',
        type: 'number',
        label: '年龄',
        max: 100,
        step: 1,
        readOnly: true,
      },
      {
        name: 'email',
        type: 'string',
        label: '邮箱',
      },
      {
        name: 'codeMultiple',
        type: 'object',
        label: '代码描述（多值）',
        lovCode: 'LOV_CODE',
        multiple: true,
        required: true,
      },
      {
        name: 'codeMultiple_code',
        bind: 'codeMultiple.code',
        type: 'string',
        label: '代码（多值）',
        multiple: true,
      },
      {
        name: 'codeMultiple_description',
        bind: 'codeMultiple.description',
        type: 'string',
        label: '代码描述',
        multiple: ',',
      },
      {
        name: 'sex',
        type: 'string',
        label: '性别',
        lookupCode: 'HR.EMPLOYEE_GENDER',
        required: true,
      },
      {
        name: 'enable',
        type: 'boolean',
        label: '是否开启',
      },
      {
        name: 'sexMultiple',
        type: 'string',
        label: '性别（多值）',
        lookupCode: 'HR.EMPLOYEE_GENDER',
        multiple: ',',
      },
      { name: 'userStatus', type: 'boolean', label: '员工状态' },
      {
        name: 'date.startDate',
        type: 'date',
        label: '开始日期',
        defaultValue: new Date(),
      },
    ],
  });

  render() {
    const statusMap = ['error', 'success'];
    return (
      <>
        <p>复制功能</p>
        <Table
          queryBar="none"
          key="user"
          dataSet={this.userDs}
          rowNumber
          clipboard={{ paste: true, copy: true }}
          style={{ height: 300 }}
        >
          <Column name="userid" filter editor lock />

          <Column name="age" filter width={200} />
          <Column
            name="name"
            editor={(record, name) => (
              <TextArea autoSize record={record} name={name} />
            )}
            sortable
            width={150}
          />
          <Column
            name="email"
            editor={(record, name) => (
              <TextArea autoSize record={record} name={name} />
            )}
            sortable
          />
          <Column
            name="userStatus"
            renderer={({ record }) => {
              if (record?.get('age') < 26) {
                return <Tag color="yellow">待入职</Tag>;
              } else if (record?.get('age') < 50) {
                return <Tag color="blue">在职</Tag>;
              }
              return <Tag color="gray">离职</Tag>;
            }}
            sortable
            width={200}
          />
          <Column
            name="enable"
            renderer={({ record }) => {
              const v = record?.get('enable') ? 1 : 0;
              return (
                <Badge status={statusMap[v]} text={v === 1 ? '启用' : '禁用'} />
              );
            }}
            sortable
            width={200}
          />
          <Column name="codeMultiple" sortable width={300} editor />
          <Column name="sex" sortable width={300} />
          <Column name="sexMultiple" sortable width={200} />
          <Column
            header="操作"
            align="center"
            renderer={this.renderEdit}
            width={100}
            lock="right"
          />
        </Table>
      </>
    );
  }
}

export default App;
