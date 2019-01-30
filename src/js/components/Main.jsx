import React from "react";
import InputBox from "./InputBox";
import Button from "./Button";
import Display from "./Display.jsx";
import { connect } from "react-redux";
import { inputChange, add, subtract } from "../actions/index";

function mapStateToProps(state, props) {
  let { value, result } = state;
  return {
    value,
    result
  };
}

class Main extends React.Component {
  render() {
    let { value, result, inputChange, add, subtract } = this.props;
    return (
      <div>
        <Display text={result} />
        <InputBox value={value} onChange={inputChange} />
        <div>
          <Button value="+" onClick={add} />
          <Button value="-" onClick={subtract} />
        </div>
      </div>
    );
  }
}

let mainConnect = connect(
  mapStateToProps,
  { inputChange, add, subtract }
)(Main);
export default mainConnect;
