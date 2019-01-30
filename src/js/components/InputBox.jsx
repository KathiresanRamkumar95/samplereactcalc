import React from "react";

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(event) {
    let { onChange } = this.props;
    onChange && onChange(event.target.value);
  }
  render() {
    let { value } = this.props;
    return (
      <input className="input" value={value} onChange={this.handleOnChange} />
    );
  }
}

export default InputBox;
