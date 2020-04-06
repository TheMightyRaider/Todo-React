import React from "react";

class Addtodo extends React.Component {
  state = {
    title: "",
  };

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleClick = (e) => {
    if (e.which == "13" || e.type == "click") {
      this.props.addTask(this.state.title);
      this.setState({
        title: "",
      });
    }
  };

  render() {
    return (
      <div className="inputForm">
        <input
          type="text"
          name="todo"
          onChange={this.handleChange}
          onKeyUp={this.handleClick}
        ></input>
        <button name="submit" onClick={this.handleClick}>
          Add Task
        </button>
      </div>
    );
  }
}

export default Addtodo;
