import React from 'react';
import ReactDOM from 'react-dom';
import {
  DataSet,
  Table,
  Form,
  TextField,
  NumberField,
  SelectBox,
  Modal,
  Button,
} from 'choerodon-ui/pro';

const { Column } = Table;

const { TableRow } = Table;

class EditButton extends React.Component {
  handleClick = (e) => {
    const { record, onClick } = this.props;
    onClick(record, e);
  };

  render() {
    return (
      <Button
        funcType="flat"
        icon="mode_edit"
        onClick={this.handleClick}
        size="small"
      />
    );
  }
}

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

  openModal = (record, isNew) => {
    let isCancel = false;
    Modal.open({
      drawer: true,
      width: 600,
      children: (
        <Form record={record}>
          <TextField name="userid" />
          <TextField name="name" />
          <NumberField name="age" />
          <SelectBox name="sex" />
        </Form>
      ),
      onOk: () => this.userDs.submit(),
      onCancel: () => (isCancel = true),
      afterClose: () => isCancel && isNew && this.userDs.remove(record),
    });
  };

  editUser = (record) => {
    this.openModal(record);
  };

  renderEdit = ({ record }) => {
    return <EditButton onClick={this.editUser} record={record} />;
  };

  renderDragRow = (props) => {
    delete props.dragColumnAlign;
    return <TableRow {...props} />;
  };

  render() {
    const buttons = ['save', 'delete', 'reset'];
    return (
      <Table
        rowDragRender={{ renderClone: this.renderDragRow }}
        dragColumnAlign="left"
        rowDraggable
        key="user"
        buttons={buttons}
        dataSet={this.userDs}
        pristine
      >
        <Column name="userid" />
        <Column name="age" />
        <Column name="enable" />
        <Column name="name" />
        <Column
          header="操作"
          align="center"
          renderer={this.renderEdit}
          lock="right"
        />
      </Table>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
