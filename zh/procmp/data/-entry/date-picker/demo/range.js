import React from 'react';
import ReactDOM from 'react-dom';
import {
  DataSet,
  DatePicker,
  DateTimePicker,
  TimePicker,
  Row,
  Col,
} from 'choerodon-ui/pro';
import moment from 'moment';

function handleDataSetChange({ value, oldValue }) {
  console.log('[range dataset newValue]', value, '[oldValue]', oldValue);
}

function handleChange(value, oldValue) {
  console.log('[range newValue]', value, '[oldValue]', oldValue);
}

function rangeValidator(value, name) {
  console.log(`[validation ${name} value]`, value);
  return true;
}

class App extends React.Component {
  ds = new DataSet({
    autoCreate: true,
    fields: [
      {
        name: 'date',
        type: 'date',
        range: ['start', 'end'],
        defaultValue: { start: '1984-11-22', end: new Date() },
        required: true,
        validator: rangeValidator,
      },
      {
        name: 'date2',
        type: 'date',
        range: true,
        required: true,
        validator: rangeValidator,
      },
      {
        name: 'multipleDate',
        type: 'date',
        range: true,
        multiple: true,
        required: true,
      },
      {
        name: 'time',
        type: 'time',
        range: true,
      },
    ],
    events: {
      update: handleDataSetChange,
    },
  });

  render() {
    return (
      <Row gutter={10}>
        <Col style={{ marginBottom: 10 }} span={24}>
          <DateTimePicker
            dataSet={this.ds}
            name="date"
            editorInPopup
            isFlat
            defaultTime={[
              moment('00:00:00', 'HH:mm:ss'),
              moment('23:59:59', 'HH:mm:ss'),
            ]}
          />
        </Col>
        <Col style={{ marginBottom: 10 }} span={24}>
          <DatePicker
            dataSet={this.ds}
            name="date2"
            placeholder={['Start Date', 'End Date']}
          />
        </Col>
        <Col style={{ marginBottom: 10 }} span={24}>
          <DatePicker
            range
            disabled
            defaultValue={['1986-11-22', new Date()]}
            placeholder={['Start Date', 'End Date']}
            onChange={handleChange}
          />
        </Col>
        <Col style={{ marginBottom: 10 }} span={24}>
          <DatePicker
            range={['start', 'end']}
            defaultValue={{ start: '1987-11-22', end: new Date() }}
            placeholder={['Start Date', 'End Date']}
            onChange={handleChange}
          />
        </Col>
        <Col style={{ marginBottom: 10 }} span={24}>
          <TimePicker dataSet={this.ds} name="time" placeholder="Choose Time" />
        </Col>
        <Col style={{ marginBottom: 10 }} span={24}>
          <DatePicker
            dataSet={this.ds}
            name="multipleDate"
            placeholder="Choose Date"
          />
        </Col>
      </Row>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
