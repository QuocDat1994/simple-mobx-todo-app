import React from "react";
import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import store from "../../../store";

class Todo extends React.Component {
  constructor() {
    super();
  }

  onChange(id, e) {
    store.editTodo(id, e.target.value);
  }

  onKeyPress(e) {
    if (e.key === "Enter") {
      e.target.classList.toggle("disabled");
      e.target.disabled = true;
    }
  }

  onDelete(id) {
    store.deleteTodo(id);
  }

  onEdit(id) {
    document.getElementById(id).classList.toggle("disabled");
    document.getElementById(id).disabled = false;
  }

  onCheck(id, e) {
    store.completedTodo(id);
  }

  render() {
    const { id, task, completed } = this.props.todo;

    return (
      <div className="todo">
        <input
          type="checkbox"
          checked={completed}
          onChange={this.onCheck.bind(this, id)}
        ></input>
        <input
          id={id}
          type="text"
          value={task}
          onChange={this.onChange.bind(this, id)}
          onKeyPress={this.onKeyPress.bind(this)}
          className={`disabled ${completed ? "completed" : ""}`}
          disabled
        ></input>
        <button className="delete" onClick={this.onDelete.bind(this, id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button className="edit" onClick={this.onEdit.bind(this, id)}>
          <FontAwesomeIcon icon={faPencilAlt} />
        </button>
      </div>
    );
  }
}

export default Todo;
