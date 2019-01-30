import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { value, onClick } = this.props;
    return (
      <button className="button" onClick={onClick}>
        {value}
      </button>
    );
  }
}

export default Button;
