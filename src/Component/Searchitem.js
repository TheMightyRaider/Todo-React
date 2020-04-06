import React from "react";
import Todo from "./Todo.js";

class SearchItem extends React.Component {
  state = {
    value: "",
    matchedItem: [],
  };

  removeTask = (id) => {
    this.setState({
      matchedItem: this.state.matchedItem.filter((item) => item.id != id),
    });
    this.props.removeATask(id);
  };

  updateValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  updateTaskOnEnterOrSubmit = (e) => {
    if (e.which == 13 || e.type == "click")
      this.setState({
        matchedItem: this.props.taskList.filter(
          (taskObj) => taskObj.todo == this.state.value
        ),
      });
  };

  render() {
    return (
      <div>
        <h3>Search</h3>
        <input
          type="text"
          name="search"
          onChange={this.updateValue}
          onKeyUp={this.updateTaskOnEnterOrSubmit}
        ></input>
        <button name="search" onClick={this.updateTaskOnEnterOrSubmit}>
          Search
        </button>
        <br></br>
        <br></br>

        {this.state.matchedItem.length > 0 ? (
          <div>
            <h3>Matching Result</h3>
            <Todo
              taskDetails={this.state.matchedItem}
              handleCheckBox={this.props.checkBoxUpdatedWhileSearching}
              deleteTask={this.removeTask}
              updateStateValue={this.props.taskUpdatedWhileSearching}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default SearchItem;
