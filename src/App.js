import React from "react";
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
    typing: false,
    todo: [],
  };

  componentDidUpdate() {
    localStorage.setItem("todo", JSON.stringify(this.state.todo));
  }

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todo"));
    if (todos != null && todos.length > 0) {
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
    if (value != "") {
      this.setState({
        todo: this.state.todo.map((item) => {
          if (item.id == id) item.todo = value;
          return item;
        }),
      });
    } else {
      this.deleteTask(id);
    }
  };

  hideAllTask = (boolean) => {
    this.setState({
      typing: boolean,
    });
  };

  render() {
    return (
      <div className="main">
        <SearchItem
          taskList={this.state.todo}
          checkBoxUpdatedWhileSearching={this.updateCheckBox}
          removeATask={this.deleteTask}
          taskUpdatedWhileSearching={this.updateTodoValue}
          addTask={this.handleClick}
          startedTyping={this.hideAllTask}
        />
        <br></br>
        {this.state.todo.length <= 0 || this.state.typing ? null : (
          <h3>What have I got?</h3>
        )}
        <Todo
          cssStyle={this.state.typing}
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
