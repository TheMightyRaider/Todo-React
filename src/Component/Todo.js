import React from "react";
import Todoitems from "./Todoitems.js";

class Todo extends React.Component {
  render() {
    return this.props.taskDetails.map((todo) => (
      <Todoitems
        key={todo.id}
        id={todo.id}
        task={todo.todo}
        completed={todo.completed}
        markComplete={this.props.handleCheckBox}
        removeTask={this.props.deleteTask}
      />
    ));
  }
}

export default Todo;
