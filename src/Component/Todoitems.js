import React from "react";

class Todoitems extends React.Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.task}></input>
        <input type="checkBox" id={this.props.id}></input>
      </div>
    );
  }
}

export default Todoitems;
