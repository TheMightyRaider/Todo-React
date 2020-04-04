import React from "react";
import Addtodo from "./Component/Addtodo";
// import Todo from "./Component/Todo";
import "./App.css";

class App extends React.Component {
  state = {
    /* Contain's the todo list in the format
    {
      id: Integer,
      todo: String,
      completed: Boolean
    }
    */
    todo: []
  };
  handleClick = title => {
    this.setState({
      todo: [...this.state.todo, { id: new Date().getTime(), title: title }]
    });
  };
  render() {
    return (
      <div>
        <Addtodo addTask={this.handleClick} />
        {/* <Todo values={this.state.todo} /> */}
      </div>
    );
  }
}

export default App;
