export function add() {
  return { type: "ADD" };
}

export function inputChange(value) {
  return { type: "VALUE_CHANGE", data: value };
}

export function subtract(value) {
  return { type: "SUB", data: value };
}
