import React from "react";
import Todoitems from "./Todoitems.js";

class Todo extends React.Component {
  render() {
    if (!this.props.cssStyle)
      return this.props.taskDetails.map((todo) => (
        <Todoitems
          key={todo.id}
          id={todo.id}
          task={todo.todo}
          completed={todo.completed}
          markComplete={this.props.handleCheckBox}
          removeTask={this.props.deleteTask}
          updateGlobalStateValue={this.props.updateStateValue}
        />
      ));
    else {
      return null;
    }
  }
}

export default Todo;
