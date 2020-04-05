import React from "react";
import Addtodo from "./Component/Addtodo";
import Todo from "./Component/Todo";
import "./App.css";

class App extends React.Component {
  state = {
    /* Contain's the todo list in the format
    todo:[{
      id: Integer,
      todo: String,
      completed: Boolean
    }]
    */

    todo: [],
  };

  handleClick = (task) => {
    if (task != "")
      this.setState({
        todo: [
          ...this.state.todo,
          { id: new Date().getTime(), todo: task, completed: false },
        ],
      });
  };

  updateCheckBox = (boolean, id) => {
    let updatedItems = this.state.todo.map((item) => {
      if (item.id == id) {
        item.completed = boolean;
      }
      return item;
    });

    this.setState({
      todo: [...updatedItems],
    });
  };

  render() {
    return (
      <div>
        <Addtodo addTask={this.handleClick} />
        <Todo
          taskDetails={this.state.todo}
          handleCheckBox={this.updateCheckBox}
        />
      </div>
    );
  }
}
export default App;
