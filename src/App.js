import React from "react";
import Addtodo from "./Component/Addtodo";
import Todo from "./Component/Todo";
import SearchItem from "./Component/Searchitem.js";
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

  componentDidUpdate() {
    localStorage.setItem("todo", JSON.stringify(this.state.todo));
  }

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todo"));
    if (todos.length > 0) {
      this.setState({
        todo: [...todos],
      });
    }
  }

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
    let updatedItems = this.state.todo
      .map((item) => {
        if (item.id == id) {
          item.completed = boolean;
        }
        return item;
      })
      .sort((firstItem, secondItem) => {
        return firstItem.completed - secondItem.completed;
      });

    this.setState({
      todo: [...updatedItems],
    });
  };

  deleteTask = (id) => {
    this.setState({
      todo: this.state.todo.filter((item) => item.id != id),
    });
  };

  updateTodoValue = (id, value) => {
    this.setState({
      todo: this.state.todo.map((item) => {
        if (item.id == id) item.todo = value;
        return item;
      }),
    });
  };

  render() {
    return (
      <div>
        <SearchItem
          taskList={this.state.todo}
          checkBoxUpdatedWhileSearching={this.updateCheckBox}
          removeATask={this.deleteTask}
          taskUpdatedWhileSearching={this.updateTodoValue}
        />
        <br></br>
        <h3>Add Task</h3>
        <Addtodo addTask={this.handleClick} />
        <Todo
          taskDetails={this.state.todo}
          handleCheckBox={this.updateCheckBox}
          deleteTask={this.deleteTask}
          updateStateValue={this.updateTodoValue}
        />
      </div>
    );
  }
}
export default App;
