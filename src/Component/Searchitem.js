import React from "react";
import Todo from "./Todo.js";

class SearchItem extends React.Component {
  state = {
    typing: false,
    value: "",
    matchedItem: [],
    button: "",
  };

  addTask = (e) => {
    if (e.which == "13" || e.type == "click") {
      this.props.startedTyping(false);
      this.props.addTask(this.state.value);
      this.setState({
        value: "",
        matchedItem: [],
        typing: false,
      });
    }
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
            button: "",
            matchedItem: [],
            typing: false,
          });
        } else {
          this.props.startedTyping(true);
          this.setState({
            typing: true,
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

  enableButton = (boolean) => {
    if (boolean) {
      this.setState({
        button: "enable",
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
        <button
          name="addTask"
          onClick={this.addTask}
          disabled={!this.state.button}
        >
          AddTask
        </button>
        <br></br>
        <br></br>

        {this.state.matchedItem.length > 0 && this.state.typing ? (
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
        ) : (
          <CheckifItsANewTask
            item={this.state.matchedItem}
            typing={this.state.typing}
            stopTyping={this.stopTyping}
            checkIfTheButtonIsEnabled={this.state.button}
            enable={this.enableButton}
          />
        )}
      </div>
    );
  }
}

let CheckifItsANewTask = (props) => {
  if (props.typing) {
    if (props.checkIfTheButtonIsEnabled != "enable") {
      props.enable("true");
    }
    return <h3>Wanna Add Item?, Click Add Task</h3>;
  } else {
    return null;
  }
};

export default SearchItem;
