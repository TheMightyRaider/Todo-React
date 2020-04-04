import React from "react";
import Todoitems from "./Todoitems.js";

class Todo extends React.Component {
  render() {
    console.log(this.props.taskDetails);
    return this.props.taskDetails.map(todo => (
      <Todoitems
        key={todo.id}
        id={todo.id}
        task={todo.todo}
        completed={todo.completed}
      />
    ));
  }
}

export default Todo;
