import React from "react";

class Todoitems extends React.Component {
  handleChange = (e) => {
    this.props.markComplete(e.target.checked, e.target.id);
  };

  passTheIdToDeleteTheTask = (e) => {
    this.props.removeTask(e.target.id);
  };

  render() {
    return (
      <div>
        <input type="text" value={this.props.task}></input>
        <input
          type="checkBox"
          id={this.props.id}
          onChange={this.handleChange}
        ></input>
        <button
          name="delete"
          id={this.props.id}
          onClick={this.passTheIdToDeleteTheTask}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Todoitems;
