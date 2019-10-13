import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faBatteryHalf } from "@fortawesome/free-solid-svg-icons";

import TodoList from "../TodoList/TodoList";
import store from "../../../store";

class Main extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const input = document.getElementById("input");
    store.createTodo(input.value);
    input.value = "";
  }

  render() {
    return (
      <div className="main">
        <div className="status-bar">
          <FontAwesomeIcon icon={faWifi} />
          <FontAwesomeIcon icon={faBatteryHalf} />
          <span>09:00</span>
        </div>
        <h1>Todo App</h1>
        <div className="input-field">
          <button onClick={this.onClick}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <input id="input" type="text" placeholder="Add a todo..." />
        </div>
        <TodoList />
      </div>
    );
  }
}

export default Main;
