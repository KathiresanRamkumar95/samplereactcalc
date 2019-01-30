let initialState = {
  value: 0,
  result: 0
};
function mainReducer(state = initialState, { type, data }) {
  if (type === "ADD") {
    let { value, result } = state;

    return Object.assign({}, state, {
      result: parseInt(result) + parseInt(value),
      value: 0
    });
  } else if (type === "VALUE_CHANGE") {
    return Object.assign({}, state, {
      value: data
    });
  } else if (type === "SUB") {
    let { value, result } = state;
    return Object.assign({}, state, {
      result: parseInt(result) - parseInt(value),
      value: 0
    });
  }
  return state;
}

export default mainReducer;
