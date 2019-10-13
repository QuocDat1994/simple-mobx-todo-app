import React from "react";
import { observer } from "mobx-react";

import Todo from "../Todo/Todo";
import "./TodoList.css";

import store from "../../../store";

@observer
class TodoList extends React.Component {
  render() {
    return store.todos.map(todo => <Todo key={todo.id} todo={todo} />);
  }
}

export default TodoList;
