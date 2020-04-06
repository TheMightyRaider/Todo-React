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
    if ((e.which <= 90 && e.which >= 48) || e.which == 8 || e.type == "click") {
      if ((e.target.name = "search")) {
        if (e.target.value == "") {
          this.props.startedTyping(false);
          this.setState({
            matchedItem: [],
          });
        } else {
          this.props.startedTyping(true);
          this.setState({
            matchedItem: this.props.taskList
              .map((taskObj) => {
                if (
                  taskObj.todo
                    .toUpperCase()
                    .indexOf(this.state.value.toUpperCase()) != -1
                ) {
                  return taskObj;
                }
              })
              .filter((item) => item != undefined),
          });
        }
      }
    }
    if (e.which == "13" || e.type == "click") {
      this.setState({
        value: "",
      });
    }
  };

  render() {
    return (
      <div>
        <h3>Search</h3>
        <input
          type="text"
          name="search"
          value={this.state.value}
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
              class="searchTask"
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
