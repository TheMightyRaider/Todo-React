import React from "react";

class Addtodo extends React.Component {
  state = {
    title: ""
  };

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleClick = e => {
    this.props.addTask(this.state.title);
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <div className="inputForm">
        <input type="text" name="todo" onChange={this.handleChange}></input>
        <button name="submit" onClick={this.handleClick}>
          Add Task
        </button>
      </div>
    );
  }
}

export default Addtodo;
