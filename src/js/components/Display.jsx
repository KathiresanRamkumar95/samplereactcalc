import React from "react";
class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { text } = this.props;
    return <div className="kathir">{text}</div>;
  }
}

export default Display;
