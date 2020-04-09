import React from "react";

class Todoitems extends React.Component {
  state = {
    id: "",
    value: "",
    enableEdit: "true",
  };

  componentDidMount() {
    this.setState({
      id: this.props.id,
      value: this.props.task,
    });
  }

  enableEditOnInput = () => {
    this.setState({
      enableEdit: "",
    });
  };

  modifyGlobalStateValue = () => {
    this.props.updateGlobalStateValue(this.state.id, this.state.value);
    this.setState({
      enableEdit: "true",
    });
  };

  updateValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleChange = (e) => {
    this.props.markComplete(e.target.checked, e.target.id);
  };

  passTheIdToDeleteTheTask = (e) => {
    this.props.removeTask(e.target.id);
  };

  render() {
    return (
      <div>
        <p>
          <label
            name="displayTask"
            className={this.state.enableEdit ? "hideTodoItems" : "todoItems"}
          >
            {this.state.value}
          </label>
          <input
            className={this.state.enableEdit ? "todoItems" : "hideTodoItems"}
            type="text"
            value={this.state.value}
            onChange={this.updateValue}
            onBlur={this.modifyGlobalStateValue}
            disabled={this.state.enableEdit}
          ></input>
          <input
            type="checkBox"
            id={this.props.id}
            checked={this.props.completed}
            onChange={this.handleChange}
          ></input>
          <button name="edit" onClick={this.enableEditOnInput}>
            Edit
          </button>
          <button
            name="delete"
            id={this.props.id}
            onClick={this.passTheIdToDeleteTheTask}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}

export default Todoitems;
