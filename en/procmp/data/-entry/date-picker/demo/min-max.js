import React from 'react';
import ReactDOM from 'react-dom';
import {
  DataSet,
  DatePicker,
  MonthPicker,
  YearPicker,
  DateTimePicker,
  Row,
  Col,
} from 'choerodon-ui/pro';
import moment from 'moment';

function filterDate(currentDate) {
  const dayInWeek = currentDate.get('d');
  return dayInWeek !== 0 && dayInWeek !== 1;
}

class App extends React.Component {
  ds = new DataSet({
    autoCreate: true,
    fields: [
      {
        name: 'startDate',
        type: 'date',
        max: 'endDate',
      },
      {
        name: 'endDate',
        type: 'date',
        min: 'startDate',
      },
    ],
  });

  render() {
    return (
      <Row gutter={10}>
        <Col style={{ marginBottom: 10 }} span={12}>
          <DatePicker
            dataSet={this.ds}
            name="startDate"
            placeholder="start date"
          />
        </Col>
        <Col style={{ marginBottom: 10 }} span={12}>
          <DatePicker dataSet={this.ds} name="endDate" placeholder="end date" />
        </Col>
        <Col style={{ marginBottom: 10 }} span={12}>
          <DatePicker
            min={moment()}
            filter={filterDate}
            placeholder="Moment min & filter"
          />
        </Col>
        <Col style={{ marginBottom: 10 }} span={12}>
          <MonthPicker min={new Date()} placeholder="Date min" />
        </Col>
        <Col style={{ marginBottom: 10 }} span={12}>
          <YearPicker max="2021-12-10" placeholder="string max" />
        </Col>
        <Col style={{ marginBottom: 10 }} span={12}>
          <DateTimePicker min={moment()} placeholder="Select date time" />
        </Col>
      </Row>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
