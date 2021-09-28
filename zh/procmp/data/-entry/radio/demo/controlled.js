import React from 'react';
import ReactDOM from 'react-dom';
import { Radio } from 'choerodon-ui/pro';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'A',
    };
  }

  handleChange = (value) => {
    console.log('[controlled]', value, '[oldValue]', this.state.value);
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <form>
        <Radio
          name="controlled"
          value="A"
          checked={value === 'A'}
          onChange={this.handleChange}
        >
          A
        </Radio>
        <Radio
          name="controlled"
          value="B"
          checked={value === 'B'}
          onChange={this.handleChange}
        >
          B
        </Radio>
        <Radio
          name="controlled"
          value="C"
          checked={value === 'C'}
          onChange={this.handleChange}
        >
          C
        </Radio>
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
