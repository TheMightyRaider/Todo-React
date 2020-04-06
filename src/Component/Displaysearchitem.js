import React from "react";

class DisplaySearchItem extends React.Component {
  state = {
    id: "",
    value: "",
    completed: "",
  };

  componentDidMount() {
    this.setState({
      id: this.props.id,
      value: this.props.value,
      completed: this.props.completed,
    });
  }

  modifyGlobalStateValue() {
    this.props.updateGlobalStateValue(this.state.value, this.state);
  }

  updateValue = (e) => {
    let inputName = e.target.name;
    let valueModified =
      inputName == "completed" ? inputName.checked : inputName.value;
    this.setState({
      [inputName]: valueModified,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="value"
          value={this.props.taskDetails[0].todo}
          onChange={this.updateValue}
          onBlur={this.modifyGlobalStateValue}
        ></input>
        <input
          type="checkBox"
          name="completed"
          id={this.props.taskDetails[0].id}
          checked={this.props.taskDetails[0].completed}
          onChange={this.updateValue}
        ></input>
        <button
          name="delete"
          id={this.props.taskDetails[0].id}
          onClick={this.passTheIdToDeleteTheTask}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default DisplaySearchItem;
