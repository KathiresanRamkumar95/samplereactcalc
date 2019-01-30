import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import "../styles.css";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Calculator</h1>
        <Main />
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
