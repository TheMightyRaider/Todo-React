import React from "react";

class Todoitems extends React.Component {
  state = {
    id: "",
    value: "",
  };

  componentDidMount() {
    this.setState({
      id: this.props.id,
      value: this.props.task,
    });
  }

  modifyGlobalStateValue = () => {
    this.props.updateGlobalStateValue(this.state.id, this.state.value);
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
        <input
          type="text"
          value={this.state.value}
          onChange={this.updateValue}
          onBlur={this.modifyGlobalStateValue}
        ></input>
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
